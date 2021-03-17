import React from 'react';
import Attribute from '../types/attribute';

const {useState} = React;

export default function Attribute(attribute: Attribute) {
	const [value, setValue] = useState(attribute.);

	return (
		<>
			<p>{value}</p>
		</>
	);
}