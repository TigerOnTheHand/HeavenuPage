export interface MenuItem {
  id : string;
  label : string;
  href : string;
  children? : MenuItem[];
}

export const menuItems : MenuItem[] = [
  { 
    id: 'Home',
    label: 'Home', 
    href: '/' 
  },
  { 
    id: 'About',
    label: 'About', 
    href: '/about' 
  },
  { 
    id: 'Projects',
    label: 'Projects', 
    href: '/', 
    children: [
      {
        id: 'FuroshikiOfLogic',
        label: '論理のふろしき',
        href: '/projects/logicoffroshiki'
      },
      {
        id: 'Archives',
        label: 'Archives',
        href: '/projects/archives'
      }
    ]
  },
  { 
    id: 'Blog',
    label: 'Blog', 
    href: '/blog' 
  },
  { 
    id: 'Contact',
    label: 'Contact', 
    href: '/contact' 
  }
]