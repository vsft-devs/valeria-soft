export const persona = {
  header: {
    template: 'Header',
    props: {
      logo: {
        path: 'assets/images/Wealthworks PartnersLogo-white.png',
        pathScroll: 'assets/images/soa-logo-small.png'
      },
      menu: {
        Services: {
          path: '',
          fragment: 'services'
        },
        "Featured Projects": {
          path: '',
          fragment: 'projects'
        },
        "Why Us": {
          path: '',
          fragment: 'whyus'
        },
        "Contact Us": {
          path: '',
          fragment: 'contact',
          isPrimary: true
        }
      },
    },
  }
};
