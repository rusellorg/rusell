import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const IsCustomerDroppedOffAtHome = () => {
  const { register, setValue } = useFormContext<Route>()

  return (
    <Checkbox
      {...register('isCustomerDroppedOffAtHome')}
      onChange={e => setValue('isCustomerDroppedOffAtHome', e)}
    >
      Is customer dropped off at home?
    </Checkbox>
  )
}

export default IsCustomerDroppedOffAtHome
