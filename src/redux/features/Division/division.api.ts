/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types/auth.type";
import type { IDivision } from "@/types/division.type";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    CreateDivision: build.mutation<IResponse<IDivision[]>, any>({
      query: (division) => ({
        url: "division/createDivision",
        method: "POST",
        data: division,
      }),
      invalidatesTags: ["Division"],
    }),

    GetAllDivision: build.query<IResponse<IDivision[]>, void>({
      query: () => ({
        url: "division",
        method: "GET",
      }),
      providesTags: ["Division"],
    }),
  }),
});

export const { useCreateDivisionMutation, useGetAllDivisionQuery } =
  divisionApi;
