import Verify from "@/pages/Verify";
import { baseApi } from "@/redux/baseApi";
import type { OTPResponse, VerifyOTPResponse } from "@/types/auth.type";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation({
      query: (credentials) => ({
        url: "user/register",
        method: "POST",
        data: credentials,
      }),
    }),

    LogIn: build.mutation({
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
      { email: string; otp: string },
      VerifyOTPResponse
    >({
      query: (data) => ({
        url: "otp/verify",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useSentOtpMutation,
  useVerifyOtpMutation,
} = authApi;
