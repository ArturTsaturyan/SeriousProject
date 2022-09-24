const navItems = [
  {
    name: 'home',
    text: 'Home',
    path: '/',
  },
  {
    name: 'aboutUs',
    text: 'AboutUse',
    path: '/aboutUs',
    children: [
      {
        name: 'aboutUs',
        path: '/aboutUs',
      },
      {
        name: 'delivery',
        path: '/aboutUs/delivery',
      },
      {
        name: 'ratings',
        path: '/aboutUs/ratings',
      },
    ],
  },
  {
    name: 'technologies',
    text: 'Technologies',
    path: '/technologies',
  },
  {
    name: 'services',
    text: 'Services',
    path: '/services',
    children: [
      {
        name: 'services',
        path: '/services',
      },
      {
        name: 'mobileapp',
        path: '/services/mobileapp',
      },
      {
        name: 'software',
        path: '/services/software',
      },
      {
        name: 'crm',
        path: '/services/crm',
      },
      {
        name: 'ceo',
        path: '/services/ceo',
      },
    ],
  },
  {
    name: "clients",
    text: 'Clients',
    path: "/clients",
  },
  // {
  //   name: "courses",
  //   text: "Courses",
  //   path: "/courses",
  // },

  {
    name: "careers",
    text: "Careers",
    path: "/careers",
  },
  // {
  //   name: "shop",
  //   text: "Shop",
  //   path: "/shop",
  // },
  {
    name: "contactUs",
    text: "Contact Us",
    path: "/contactUs",
  },
];

export default navItems;
