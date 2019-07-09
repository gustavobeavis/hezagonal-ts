import { ValidatorVError } from '../../../../../../src/lib/validator/verror/index';
export class someErrorList extends ValidatorVError {
  constructor(){
    super();
    this.add(new Error('error A'));
    this.add(new Error('error B'));
  }
  count(): number {
    return  this.errors.length;
  }
}
