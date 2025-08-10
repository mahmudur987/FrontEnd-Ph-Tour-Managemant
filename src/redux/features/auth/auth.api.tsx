import { baseApi } from "@/redux/baseApi";

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
  }),
});

export const { useRegisterMutation, useLogInMutation } = authApi;
