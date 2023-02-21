import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import InventoryIcon from '@mui/icons-material/Inventory';

const adminitems = [
    {
      href: '/dashboard',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Dashboard'
    },
    {
      href: '/allreports',
      icon: (<UsersIcon fontSize="small" />),
      title: 'All Reports'
    },
    {
      href: '/inventory',
      icon: (<UsersIcon fontSize="small" />),
      title: 'Inventory'
    },
      {
    href: '/attendance',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Attendance'
  },
    {
      href: '/customers',
      icon: (<UsersIcon fontSize="small" />),
      title: 'Customers'
    },
    {
      href: '/allrequest',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Inventory_Request'
    },
    {
      href: '/products',
      icon: (<ShoppingBagIcon fontSize="small" />),
      title: 'Products'
    },
    {
      href: '/account',
      icon: (<UserIcon fontSize="small" />),
      title: 'Account'
    },
    {
      href: '/settings',
      icon: (<CogIcon fontSize="small" />),
      title: 'Settings'
    },
      {
    href: '/students',
    icon: (<UserIcon fontSize="small" />),
    title: 'Students'
  },
    {
      href: '/logout',
      icon: (<LockIcon fontSize="small" />),
      title: 'Logout'
    },
    {
      href: '/404',
      icon: (<XCircleIcon fontSize="small" />),
      title: 'Error'
    },
  ];
  

 

];

export { adminitems };