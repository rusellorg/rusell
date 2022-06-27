import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const IsCustomerDroppedOffAtHome = () => {
  const {
    register,
    formState: {
      errors: { isCustomerDroppedOffAtHome },
    },
  } = useFormContext<Route>()

  return (
    <Checkbox
      label="Is customer dropped off at home?"
      helperText={isCustomerDroppedOffAtHome?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('isCustomerDroppedOffAtHome')}
    />
  )
}

export default IsCustomerDroppedOffAtHome
