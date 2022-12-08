import { USFlag } from '@components/icons/language/USFlag';

export const siteSettings = {
  name: 'RudiShule',
  description:
    'School Shopping at ypur fingertips',
  author: {
    name: 'RudiShule.',
    websiteUrl: 'https://rudushule.com',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: 'Rudishule',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'Ugx',
  site_header: {
    menu: [
      {
        id: 5,
        path: '/shops/',
        label: 'Schools',
      },
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
    ],
    languageMenu: [
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
    ],
  },
};
