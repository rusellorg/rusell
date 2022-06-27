import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Company } from '../../types'

const PhoneField = () => {
  const {
    register,
    formState: {
      errors: { phone },
    },
  } = useFormContext<Company>()

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
        pattern: {
          value: /^\+?[0-9]{10,15}$/,
          message: 'Phone number is invalid',
        },
      })}
    />
  )
}

export default PhoneField
