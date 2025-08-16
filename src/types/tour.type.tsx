export interface ITourType {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITour {
  _id?: string;
  title: string;
  description: string;
  location: string;
  costFrom: string;
  startDate: Date;
  endDate: Date;
  departureLocation: string;
  arrivalLocation: string;
  included: { value: string }[];
  excluded: { value: string }[];
  amenities: { value: string }[];
  tourPlan: { value: string }[];
  maxGuest: string;
  minAge: string;
  division: string;
  tourType: string;
  createdAt: string;
  updatedAt: string;
}
