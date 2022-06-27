import { HttpClient } from '@rusell-org/shared'

import { Company } from '../types'

export const CompanyService = {
  save: async (company: Company) => {
    await HttpClient.post('companies', company)
  },
}
