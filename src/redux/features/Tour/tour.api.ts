import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types/auth.type";
import type { ITourType } from "@/types/tour.type";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetTourTypes: build.query<IResponse<ITourType[]>, void>({
      query: () => ({
        url: "tourType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTourTypesQuery } = tourApi;
