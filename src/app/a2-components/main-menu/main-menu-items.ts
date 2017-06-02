import { MainMenuItem } from './main-menu-item';

export const MAINMENUITEMS: MainMenuItem[] = [
  {
    title: 'Main',
    icon: '',
    active: true,
    groupTitle : true,
    sub: '',
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Users',
    icon: 'fa fa-users',
    active: false,
    groupTitle : false,
    sub: '',
    routing: '/default-layout/users',
    externalLink: '',
    budge: '',
    budgeColor: ''
  }
];