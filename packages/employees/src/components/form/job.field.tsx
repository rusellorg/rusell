import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

import { Employee } from '../../types/index'

const JobField = () => {
  const {
    register,
    formState: {
      errors: { job },
    },
  } = useFormContext<Employee>()

  return (
    <Input
      label="Job"
      helperText={job?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('job', {
        required: {
          value: true,
          message: 'This field is required',
        },
      })}
    />
  )
}

export default JobField
