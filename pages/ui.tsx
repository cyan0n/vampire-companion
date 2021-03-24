import React, { ReactElement } from 'react'
import TextInput from '../components/inputs/TextInput'
import Layout from '../components/layout'

import NumberInput from '../components/inputs/NumberInput'
import Toggle from '../components/inputs/ToggleInput'

const UIPage: React.FC = (): ReactElement => (
  <Layout>
    <div className="flex flex-col items-center">
      <NumberInput
        label="Label"
        min={0} max={10}
      />
      <Toggle
        label="Toggle"
      />
      <TextInput
        label="Text Input" 
      />
    </div>
  </Layout>
)

export default UIPage