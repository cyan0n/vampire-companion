import React, { ReactElement } from 'react'
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
    </div>
  </Layout>
)

export default UIPage