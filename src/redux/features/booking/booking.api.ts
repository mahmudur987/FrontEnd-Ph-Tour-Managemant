import { baseApi } from "@/redux/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data) => ({
        url: "booking/createBooking",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;

export default bookingApi;
