# React utils

## Component props

Ha egy komponens props-szainak a típusait akarod elérni, használd a `ComponentProps` utility-t

```tsx
import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>;
```

## HTMLAttributes

Hogy minél rugalmasabb komponenseket tudj készíteni, terjeszd ki a komponens interface-ét a komponens html attribútumaival, majd egyszerűen spread-eld bele a html-be, így megkap minden html atrribútumot a komponensed.

```tsx
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<Props> = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);
```

## Változtatható HTML tag-ek

Reactban arra is van lehetőséged, hogy dinamikusan változtathasd a komponensed html tag-ét.

```tsx
import React from 'react';

// ezeket a html tageket fogadod el
type TagsAllowed = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
// elkéri a tagekhez tartozó props-okat
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

// azokat az attributumokat adja vissza amit megadsz component props-ba
type Props<Tag extends TagsAllowed> = {
  component?: Tag;
} & DynamicProps[Tag];

// generic, ne felejts el alapértelmezett taget megadmi
const Heading = <Tag extends TagsAllowed = 'h2'>({
  children,
  component,
  ...rest
}: Props<Tag>) =>
  // createElement-tel, egyszerűen létrehozod a komponenst, itt is meg kell adni az alapértelmezett taget
  React.createElement(
    component || 'h2',
    // második paraméterbe kerülnek a props-ok
    {
      ...rest,
    },
    children,
  );
```
