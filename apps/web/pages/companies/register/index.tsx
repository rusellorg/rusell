import { Spacer, Text } from '@nextui-org/react'
import { Company, CompanyForm } from '@rusell-org/companies'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

const RegisterCompany = () => {
  const router = useRouter()

  const handleSubmit = async (company: Company) => {
    await axios.post('/api/companies', company)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>Register company</title>
      </NextHead>

      <Text h2>Register company</Text>

      <Spacer y={1} />

      <CompanyForm onSubmit={handleSubmit} />
    </>
  )
}

export default RegisterCompany
