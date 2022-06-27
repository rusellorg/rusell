import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Employee } from '../../types/index'

const NameField = () => {
  const {
    register,
    formState: {
      errors: { name },
    },
  } = useFormContext<Employee>()

  return (
    <Input
      label="Name"
      helperText={name?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('name', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default NameField
