import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Company } from '../../types'

const AddressField = () => {
  const {
    register,
    formState: {
      errors: { address },
    },
  } = useFormContext<Company>()

  return (
    <Input
      label="Address"
      helperText={address?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('address', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default AddressField
