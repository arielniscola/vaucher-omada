interface IApiError {
  ack: number;
  message: string;
}
export class ApiError {
  ack: number;
  message: string;

  constructor(error: IApiError) {
    this.ack = error.ack;
    this.message = error.message;
  }

  public setMessage(message: string) {
    message = this.message.replace("${message}", message);
    return new ApiError({ ...this, message });
  }
}
