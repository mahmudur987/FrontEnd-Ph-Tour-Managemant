export interface Error {
  statusCode: number;
  data: IErrorResponse;
  stack: string;
}

export interface IErrorResponse {
  success: boolean;
  message: string;
  error: {
    statusCode: number;
  };
}
