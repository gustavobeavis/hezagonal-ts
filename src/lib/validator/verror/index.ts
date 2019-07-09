
import { Validate } from '../index';
import { MultiError } from 'VError';

export abstract class ValidatorVError implements Validate{
  protected errors: Error[] = [];
  add(error: Error): this {
    this.errors.push(error);
    return this;
  }
  async run(): Promise<void | Error> {
    if(this.errors.length){
      throw new MultiError(this.errors);
    }

    return;
  }
}
