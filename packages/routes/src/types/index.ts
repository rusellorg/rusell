export type Route = {
  id?: string
  from: string
  to: string
  cost: number
  isCustomerPickedUpAtHome: boolean
  isCustomerDroppedOffAtHome: boolean
  companyId: string
}
