import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const IsCustomerPickedUpAtHome = () => {
  const { register, setValue } = useFormContext<Route>()

  return (
    <Checkbox
      {...register('isCustomerPickedUpAtHome')}
      onChange={e => setValue('isCustomerPickedUpAtHome', e)}
    >
      Is customer picked up at home?
    </Checkbox>
  )
}

export default IsCustomerPickedUpAtHome
