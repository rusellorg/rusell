import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Company } from '../../types'

const NameField = () => {
  const {
    register,
    formState: {
      errors: { name },
    },
  } = useFormContext<Company>()

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
