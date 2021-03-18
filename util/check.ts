function rollDie(sides: number = 10) {
	return Math.floor((Math.random() * 10) + 1)
}
enum DieFace {
	bestial,
	failure,
	success,
	critical,
	messy
}

class DieResult {
	private face: DieFace

	constructor(face: DieFace) {
		this.face = face
	}

	isSuccess(): boolean {
		return this.face == DieFace.bestial ||
			this.face == DieFace.critical ||
			this.face == DieFace.success
	}

	isCritical(): boolean {
		return this.face == DieFace.bestial ||
			this.face == DieFace.critical
	}

	isMessy(): boolean {
		return this.face == DieFace.messy
	}

	isBestial(): boolean {
		return this.face == DieFace.bestial
	}

	isFailure(): boolean {
		return !this.isSuccess()
	}
}
type DieResult2 = 'messy' | 'critical' | 'success' | 'failure' | 'bestial'

class Die {
	protected value: number = null

	roll(): DieResult {
		this.value = Math.floor((Math.random() * 10) + 1)
		return this.getResult()
	}

	getResult(): DieResult {
		let face = DieFace.failure

		if (this.value == 10) {
			face = DieFace.critical
		} else if (this.value > 5) {
			face = DieFace.success
		}

		return new DieResult(face)
	}
}

class HungerDie extends Die {
	getResult(): DieResult {
		let face = DieFace.failure
		
		if (this.value == 10) {
			face = DieFace.messy
		} else if (this.value > 5) {
			face = DieFace.success
		} else if (this.value == 1) {
			face = DieFace.bestial
		}

		return new DieResult(face)
	}
}

class DicePool {
	private quantity: number
	private dice: Die[]
	private hunger: number
	private results: DieResult[]

	constructor(quantity: number, hunger: number = 0) {
		hunger = (hunger > quantity) ? quantity : hunger
		quantity -= hunger

		this.dice = new Array<Die>(quantity)
		this.dice.push(...(new Array<HungerDie>(hunger)))
	}

	roll(): DieResult[] {
		this.results = this.dice.map<DieResult>(die => die.roll())
		return this.results
	}

	getValue() {
		let critical = false;
		let value = 0;
		let isMessy = false;
		let isCritical = false;
		let isBestial = false;
		this.results.forEach(result => {
			if (result.isSuccess()) {
				value++
			}
			if (result.isCritical()) {
				if (critical) {
					value += 2
					isCritical = true;
				}
				critical = !critical
			}
			if (result.isMessy()) {
				isMessy = true
			}
			if (result.isMessy()) {
				isBestial = true
			}
		})
		return value
	}
}

interface CheckResult {
	value: number
	critical: boolean
	messyCritical: boolean
	bestialFailure: boolean
	success?: boolean
}

export default function Check({
	poolSize,
	hunger,
	difficulty
}: {
	poolSize: number
	hunger: number
	difficulty?: number
}): CheckResult {
	const result: CheckResult = {
		value: 0,
		critical: false,
		messyCritical: false,
		bestialFailure: false
	}
	console.log({poolSize, hunger})
	const dicePool = new DicePool(poolSize, hunger)
	let criticalCount = 0
	dicePool.roll().forEach(die => {
		if (die.isSuccess()) {
			result.value ++
		}
		if (die.isCritical()) {
			criticalCount++
			if (criticalCount % 2 == 0) {
				result.value += 2
				result.critical = true;
			}
		}
		if (die.isMessy()) {
			result.messyCritical = true
		}
		if (die.isBestial()) {
			result.bestialFailure = true
		}
	})

	if (difficulty) {
		result.success = result.value >= difficulty
	}

	return result
}