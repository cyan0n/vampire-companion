import React, { ReactElement } from 'react'
import TextInput from '../components/inputs/textInput'
import Layout from '../components/layout'

import NumberInput from '../components/numberInput'
import Toggle from '../components/toggle'

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