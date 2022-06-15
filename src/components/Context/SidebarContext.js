import React, { createContext, useState } from "react";
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { User as UserIcon } from '../../icons/user';
import { UserAdd as UserAddIcon } from '../../icons/user-add';
import { Users as UsersIcon } from '../../icons/users';
import { XCircle as XCircleIcon } from '../../icons/x-circle';
import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { Cog as CogIcon } from '../../icons/cog';
import { Lock as LockIcon } from '../../icons/lock';

const SidebarContext = createContext();
const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard',
    submenu: false,
    sublink: []
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers',
    submenu: false,
    sublink: []
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products',
    submenu: true,
    sublink: [
      {
        href: '/categories',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Categories',
      },
      {
        href: '/products',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Products',
      },
      
    ]
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account',
    submenu: false,
    sublink: []
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings',
    submenu: false,
    sublink: []
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login',
    submenu: false,
    sublink: []
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register',
    submenu: false,
    sublink: []
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error',
    submenu: false,
    sublink: []
  }
];
export function SidebarProvider({ children }) {
    return (
        <SidebarContext.Provider value={items}>{ children }</SidebarContext.Provider>
    );   
}

export default SidebarContext;