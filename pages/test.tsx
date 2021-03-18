import { ReactElement } from 'react';
import RollButton from '../components/rollButton'
import Test from '../components/test'
import CheckButton from '../components/checkButton'

export default function TestPage(): ReactElement {
  return (
    <>
      <RollButton/>
			<Test/>
			<CheckButton/>
    </>
  )
}