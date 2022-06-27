import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Employee } from '../../types'
import IdField from './id.field'
import JobField from './job.field'
import LastNameField from './last-name.field'
import NameField from './name.field'
import PhoneField from './phone.field'

type Props = {
  onSubmit: (employee: Employee) => void
}

const EmployeeForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm<Employee>()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <IdField />
          </Grid>
          <Grid xs={12}>
            <NameField />
          </Grid>
          <Grid xs={12}>
            <LastNameField />
          </Grid>
          <Grid xs={12}>
            <JobField />
          </Grid>
          <Grid xs={12}>
            <PhoneField />
          </Grid>
          <Spacer y={1} />
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            color="primary"
            shadow
            css={{ width: '100%' }}
          >
            {form.formState.isSubmitting ? (
              <Loading color="currentColor" size="sm" />
            ) : (
              <>Save</>
            )}
          </Button>
        </Grid.Container>
      </form>
    </FormProvider>
  )
}

export default EmployeeForm
