import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Route } from '../../types'

const CostField = () => {
  const {
    register,
    formState: {
      errors: { cost },
    },
  } = useFormContext<Route>()

  return (
    <Input
      label="Cost"
      helperText={cost?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('cost', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default CostField
