import { baseClass } from '@package/ui';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en" className={baseClass}>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
