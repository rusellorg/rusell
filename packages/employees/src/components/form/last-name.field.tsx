import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Employee } from '../../types/index'

const LastNameField = () => {
  const {
    register,
    formState: {
      errors: { lastName },
    },
  } = useFormContext<Employee>()

  return (
    <Input
      label="LastName"
      helperText={lastName?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('lastName', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default LastNameField
