import { AccountModel } from 'domain/models/account.model'

type AuthenticationParams = {
  email: string
  password: string
}

// implementação da nossa regra de négocio a classe que foi implementar essa interface precisa implementar esse método
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
