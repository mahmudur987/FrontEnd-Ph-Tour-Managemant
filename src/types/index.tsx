export interface Error {
  statusCode: number;
  data: {
    success: boolean;
    message: string;
    error: {
      statusCode: number;
    };
    stack: any;
  };
}
