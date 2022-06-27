import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Company } from '../../types'

const NitField = () => {
  const {
    register,
    formState: {
      errors: { nit },
    },
  } = useFormContext<Company>()

  return (
    <Input
      label="Nit"
      helperText={nit?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('nit', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default NitField
