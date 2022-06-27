import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Employee } from '../../types/index'

const IdField = () => {
  const {
    register,
    formState: {
      errors: { id },
    },
  } = useFormContext<Employee>()

  return (
    <Input
      label="Id"
      helperText={id?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('id', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default IdField
