import { baseApi } from "@/redux/baseApi";
import type {
  IResponse,
  IUser,
  OTPResponse,
  VerifyOTPResponse,
} from "@/types/auth.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation({
      query: (credentials) => ({
        url: "user/register",
        method: "POST",
        data: credentials,
      }),
    }),

    LogIn: build.mutation<
      IResponse<LoginData>,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        data: credentials,
      }),
    }),

    SentOtp: build.mutation<OTPResponse, { email: string }>({
      query: (data) => ({
        url: "otp/send",
        method: "POST",
        data: data,
      }),
    }),

    VerifyOtp: build.mutation<
      VerifyOTPResponse,
      { email: string; otp: string }
    >({
      query: (data) => ({
        url: "otp/verify",
        method: "POST",
        data: data,
      }),
    }),

    GetProfile: build.query<IResponse<IUser>, null>({
      query: () => ({
        url: "auth/profile",
        method: "GET",
      }),
    }),

    LogOut: build.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useSentOtpMutation,
  useVerifyOtpMutation,
  useGetProfileQuery,
  useLogOutMutation,
} = authApi;
