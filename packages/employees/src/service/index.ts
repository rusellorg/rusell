import { HttpClient } from '@rusell-org/shared'

import { Employee } from '../types'

export const EmployeeService = {
  save: async (employee: Employee) => {
    await HttpClient.post('employees', employee)
  },
}
