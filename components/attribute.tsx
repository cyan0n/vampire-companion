import React, {
	ReactElement
} from 'react';
import styles from '../styles/attribute.module.css'

interface AttributeProps {
	value: number
	label?: String
	className?: String
	onUpdate?: (value: number) => void
}

const AttributeComponent: React.FC<AttributeProps> = ({
	value,
	label,
	className,
	onUpdate = () => {},
}): ReactElement => {
	const [active, setActive] = React.useState(false)
	const handleClick = () => {
		const newActive = !active
		setActive(newActive)
		onUpdate(value * (newActive ? 1 : -1))
	}
	const firstMount = React.useRef(true)

	React.useEffect(() => {
		if (firstMount.current) {
			firstMount.current = false
		} else {
			onUpdate(value * (active ? 1 : -1))
		}
	}, [active])

	return (
		<div
			className={`
				${className}
				${active ? styles.active : ''}
				flex
				flex-row
				justify-between
				cursor-pointer
			`}
			onClick={() => setActive(!active)}
		>
			<div className="mr-4">{label}</div>
			<div>{value}</div>
		</div>
	)
}

export default AttributeComponent