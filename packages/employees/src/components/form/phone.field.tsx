import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Employee } from '../../types/index'

const PhoneField = () => {
  const {
    register,
    formState: {
      errors: { phone },
    },
  } = useFormContext<Employee>()

  return (
    <Input
      label="Phone"
      helperText={phone?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('phone', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default PhoneField
