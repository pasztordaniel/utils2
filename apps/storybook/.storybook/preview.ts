import type { Preview } from '@storybook/react';
import i18n from '@package/i18n';
import '@package/theme/style.css';

const preview: Preview = {
  parameters: {
    i18n,
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      darkClass: ['dark', 'bg-neutral-800', 'text-slate-200'],
      lightClass: ['light', 'bg-neutral-200', 'text-slate-700'],
      stylePreview: true,
      classTarget: 'html',
    },
    viewport: {
      viewports: {
        nokia3310: {
          name: 'Nokia 3310',
          styles: {
            width: '240px',
            height: '320px',
          },
        },
        iPhone4: {
          name: 'iPhone 4',
          styles: {
            width: '320px',
            height: '480px',
          },
        },
        iPhoneSE: {
          name: 'iPhone SE',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        iPhoneXR: {
          name: 'iPhone XR',
          styles: {
            width: '414px',
            height: '896px',
          },
        },
        iPhone12Pro: {
          name: 'iPhone 12 Pro',
          styles: {
            width: '390px',
            height: '844px',
          },
        },
        pixel5: {
          name: 'Pixel 5',
          styles: {
            width: '393px',
            height: '851px',
          },
        },
        galaxyS8p: {
          name: 'Samsung Galaxy S8+',
          styles: {
            width: '360px',
            height: '740px',
          },
        },
        galaxyS20u: {
          name: 'Samsung Galaxy S20 Ultra',
          styles: {
            width: '412px',
            height: '915px',
          },
        },
        iPadAir: {
          name: 'iPad Air',
          styles: {
            width: '820px',
            height: '1180px',
          },
        },
        iPadMini: {
          name: 'iPad Mini',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        surfacePro7: {
          name: 'Surface Pro 7',
          styles: {
            width: '912px',
            height: '1368px',
          },
        },
        surfaceDuo: {
          name: 'Surface Duo',
          styles: {
            width: '540px',
            height: '720px',
          },
        },
        galaxyFold: {
          name: 'Galaxy Fold',
          styles: {
            width: '280px',
            height: '653px',
          },
        },
        galaxyA51: {
          name: 'Samsung Galaxy A51/71',
          styles: {
            width: '412px',
            height: '914px',
          },
        },
        nestHub: {
          name: 'Nest Hub',
          styles: {
            width: '1024px',
            height: '600px',
          },
        },
        nestHubMax: {
          name: 'Nest Hub Max',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        macBookAir: {
          name: 'MacBook Air',
          styles: {
            width: '1280px',
            height: '832px',
          },
        },
        macPro14: {
          name: 'MacBook Pro 14"',
          styles: {
            width: '1512px',
            height: '982px',
          },
        },
        macPro16: {
          name: 'MacBook Pro 16"',
          styles: {
            width: '1728px',
            height: '1117px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '1024px',
          },
        },
      },
    },
  },
  globals: {
    locale: 'hu',
    locales: {
      hu: { title: 'Magyar', left: '🇭🇺' },
      en: { title: 'English', left: '🇺🇸' },
    },
  },
};

export default preview;
