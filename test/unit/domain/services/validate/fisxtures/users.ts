import { User } from '../../../../../../src/domain/common/models/user'
export const emptyUser: User = <User>{}
export const invalidNameUser: User = <User>{
  id: '',
  name: '',
  displayName: 'teste',
  email: 'teste@teste.com',
}

export const invalidDisplayNameUser: User = <User>{
  id: '',
  name: 'teste',
  displayName: '',
  email: 'teste@teste.com',
}

export const invalidEmailUser: User = <User>{
  id: '',
  name: 'teste',
  displayName: 'teste',
  email: 'teste.com.br',
}

export const validUser: User = <User>{
  id: '',
  name: 'teste',
  displayName: 'teste',
  email: 'abcd@teste.com.br',
}
