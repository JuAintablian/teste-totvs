import { User } from '../models/user.model';

export const initialDataUser: Array<User> = [
  {
    id: 1,
    name: 'João da Silva',
    dateBirth: '2001-02-17',
    identity: '12345678909',
    phone: '11978977988',
    organDonor: true,
    actions: ['edit', 'del']
  },
  {
    id: 2,
    name: 'Maria Garcia',
    dateBirth: '1990-02-11',
    identity: '365998008',
    phone: '13925665844',
    organDonor: false,
    actions: ['edit', 'del']
  },
  {
    id: 3,
    name: 'Lara Matos',
    dateBirth: '1995-05-20',
    identity: '98765432130',
    phone: '11988569236',
    organDonor: true,
    actions: ['edit', 'del']
  }
];
