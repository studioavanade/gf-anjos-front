import { IAddress } from "../shared";

export interface IDonator {
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
