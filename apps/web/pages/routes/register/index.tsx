import { Spacer, Text } from '@nextui-org/react'
import { Route, RouteForm } from '@rusell-org/routes'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

const RegisterRoute = () => {
  const router = useRouter()

  const handleSubmit = async (route: Route) => {
    await axios.post('/api/routes', route)
    await router.push('/')
  }
  return (
    <>
      <NextHead>
        <title>Register route</title>
      </NextHead>

      <Text h2>Register route</Text>

      <Spacer y={1} />

      <RouteForm onSubmit={handleSubmit} />
    </>
  )
}

export default RegisterRoute
