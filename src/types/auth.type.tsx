/* eslint-disable @typescript-eslint/no-explicit-any */
export interface OTPResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
}
export interface VerifyOTPResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
}
