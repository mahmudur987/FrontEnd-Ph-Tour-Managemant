import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types/auth.type";
import type { ITour, ITourType } from "@/types/tour.type";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetTourTypes: build.query<IResponse<ITourType[]>, void>({
      query: () => ({
        url: "tourType",
        method: "GET",
      }),
      providesTags: ["TourType"],
    }),
    CreateTourType: build.mutation<IResponse<ITourType>, { name: string }>({
      query: (tourType) => ({
        url: "tourType/createTourType",
        method: "POST",
        data: tourType,
      }),
      invalidatesTags: ["TourType"],
    }),
    RemoveTourType: build.mutation<IResponse<ITourType>, string>({
      query: (id) => ({
        url: `tourType/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TourType"],
    }),
    AddTour: build.mutation<IResponse<ITour>, FormData>({
      query: (tourType) => ({
        url: "tour/createTour",
        method: "POST",
        data: tourType,
      }),
      invalidatesTags: ["Tour"],
    }),
  }),
});

export const {
  useGetTourTypesQuery,
  useCreateTourTypeMutation,
  useRemoveTourTypeMutation,
  useAddTourMutation,
} = tourApi;
