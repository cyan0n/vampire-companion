import React from 'react';
import Attribute from '../types/attribute';

const {useState} = React;

export default function AttributeComponent({
	attribute
} : {
	attribute: Attribute
}) {
	const [value, setValue] = useState(attribute.value);

	return (
		<>
			<p>{attribute.label}: {value}</p>
		</>
	)
}