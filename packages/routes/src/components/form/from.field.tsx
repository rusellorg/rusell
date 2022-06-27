import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const FromField = () => {
  const {
    register,
    formState: {
      errors: { from },
    },
  } = useFormContext<Route>()

  return (
    <Input
      label="From"
      helperText={from?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('from', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default FromField
