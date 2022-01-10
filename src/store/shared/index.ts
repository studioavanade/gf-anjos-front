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
