import { User } from '../../../common/models/user';
import logger from '../../../../lib/logger/instance'
export class AddUser {
  private user: User
  constructor(user: User){
    this.user = user
  }
  private notify(): void{
    logger.info('created User', this.user);
  }

  private setId(): void{
    if(!this.user.id){
      this.user.id = Math.random().toString(36).substring(2, 15);
    }
  }

  async create(){
    this.setId()
    this.notify()
    return this.user
  }

}
