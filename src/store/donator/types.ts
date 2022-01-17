import { IAddress, PersonType } from "../shared";

export interface IDonator {
  personType?: PersonType;
  email?: string;
  id?: string;
  name?: string;
  lastName?: string;
  birthDate?: Date;
  cpf?: string;
  phone?: string;
  followAccountabilityReports?: boolean;
  allowCommunications?: boolean;
  allowPrivacyData?: boolean;
  address?: IAddress;
}
