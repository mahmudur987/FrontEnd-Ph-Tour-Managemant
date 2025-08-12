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

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface LoginData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  isActive: string;
  auths: IUserAuth[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserAuth {
  provider: string;
  providerId: string;
}
