import { CustomError, IError } from ".";

export class NotAuthorizationError extends CustomError {
  public statusCode: number = 401;
  constructor(public msg: string = "Not Authorized") {
    super(msg);
    Object.setPrototypeOf(this, NotAuthorizationError.prototype);
  }
  public serializeErrors(): IError[] {
    return [{ message: this.msg }];
  }
}
