import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Route } from '../../types'
import CostField from './cost.field'
import FromField from './from.field'
import IsCustomerDroppedOffAtHome from './is-customer-dropped-off-at-home'
import IsCustomerPickedUpAtHome from './is-customer-picked-up-at-home'
import ToField from './to.field'

type Props = {
  onSubmit: (route: Route) => void
}

const RouteForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm<Route>()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <FromField />
          </Grid>
          <Grid xs={12}>
            <ToField />
          </Grid>
          <Grid xs={12}>
            <CostField />
          </Grid>
          <Grid xs={12}>
            <IsCustomerPickedUpAtHome />
          </Grid>
          <Grid xs={12}>
            <IsCustomerDroppedOffAtHome />
          </Grid>
        </Grid.Container>

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
      </form>
    </FormProvider>
  )
}

export default RouteForm
