import { IAddress, PersonType } from "../shared";

export interface IDonator {
  id?: number;
  email?: string;
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
