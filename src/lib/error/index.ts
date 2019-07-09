import { VError } from 'VError';
export default class CommonError extends VError {
  constructor(...args:any){
    super(args);
  }
}
