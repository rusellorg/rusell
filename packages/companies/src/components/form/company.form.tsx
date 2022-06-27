import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Company } from '../../types'
import AddressField from './address.field'
import NameField from './name.field'
import NitField from './nit.field'
import PhoneField from './phone.field'

type Props = {
  onSubmit: (company: Company) => void
}
const CompanyForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm<Company>()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <NitField />
          </Grid>
          <Grid xs={12}>
            <NameField />
          </Grid>
          <Grid xs={12}>
            <PhoneField />
          </Grid>
          <Grid xs={12}>
            <AddressField />
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

export default CompanyForm
