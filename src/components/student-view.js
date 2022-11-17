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


const items = [
  {
    href: '/dashboard',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/reports',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Reports'
  },
  {
    href: '/inventory',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Inventory'
  },
  {
    href: '/projects',
    icon: (<UserIcon fontSize="small" />),
    title: 'Projects'
  },
  {
    href: '/logout',
    icon: (<LockIcon fontSize="small" />),
    title: 'Logout'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/student',
    icon: (<UserIcon fontSize="small" />),
    title: 'Student'
  }
];

export { items };