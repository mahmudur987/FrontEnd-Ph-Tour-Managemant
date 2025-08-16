export interface ITourType {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITour {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
