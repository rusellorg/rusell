import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const ToField = () => {
  const {
    register,
    formState: {
      errors: { to },
    },
  } = useFormContext<Route>()

  return (
    <Input
      label="Cost"
      helperText={to?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('to', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default ToField
