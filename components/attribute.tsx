import React, {
	ReactElement, useEffect
} from 'react';
import styles from '../styles/attribute.module.css'

interface AttributeProps {
	attribute: {
		label: string
		value: number
	}
	className?: String
	onUpdate?: (value: number) => void
}

const AttributeComponent: React.FC<AttributeProps> = ({
	attribute,
	className,
	onUpdate = () => {},
}): ReactElement => {
	const [active, setActive] = React.useState(false)

	useEffect(() => {
		onUpdate(active ? attribute.value : 0)
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
				bg-gray-600
				py-1
				px-2
				rounded
			`}
			onClick={() => setActive(!active)}
		>
			<div className="mr-4">{attribute.label}</div>
			<div className="font-display">{attribute.value}</div>
		</div>
	)
}

export default AttributeComponent