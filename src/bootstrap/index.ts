import { Container } from 'inversify'
import config from './config'

export default async function(): Promise<Container> {
  let container = new Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true,
  })

  await config(container)
  return container
}
