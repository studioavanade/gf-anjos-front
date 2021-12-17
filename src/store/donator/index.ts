import { IDonation } from "../donation/types";
import { IAddress } from "../shared";

export interface IDonator {
  email: string;
  name: string;
  lastName: string;
  birthDate: Date;
  cpf: string;
  phone: string;
  followAccountabilityReports: boolean;
  address: IAddress;
  donations: IDonation[];
}
