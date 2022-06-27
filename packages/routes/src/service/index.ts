import { HttpClient } from '@rusell-org/shared'

import { Route } from '../types'

export const RouteService = {
  save: async (route: Route) => {
    await HttpClient.post('routes', route)
  },
}
