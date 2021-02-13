export interface User {
  id?: number;
  name: string;
  dateBirth: string;
  identity: string;
  phone: string;
  organDonor: boolean;
  actions: Array<string>;
}
