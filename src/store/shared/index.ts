export interface IAddress {
  street: string;
  number: string;
  neighborhood: string;
  postlCode: string;
  city: string;
  state: string;
  country: string;
  complement: string;
}

export enum PersonType {
  NATURAL_PERSON = 0,
  LEGAL_PERSON = 1,
}

export enum Education {
  FUNDAMENTAL = 0,
  HIGH_SCHOOL = 1,
  GRADUATION_COMPLETE = 2,
  GRADUATION_INCOMPLETE = 3,
  POST_GRADUATION = 4,
}
