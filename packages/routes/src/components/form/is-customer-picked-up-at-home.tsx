import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const IsCustomerPickedUpAtHome = () => {
  const {
    register,
    formState: {
      errors: { isCustomerPickedUpAtHome },
    },
  } = useFormContext<Route>()

  return (
    <Checkbox
      label="Is customer picked up at home?"
      helperText={isCustomerPickedUpAtHome?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('isCustomerPickedUpAtHome')}
    />
  )
}

export default IsCustomerPickedUpAtHome
