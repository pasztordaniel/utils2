import classNames from 'classnames';
import React from 'react';

type TagsAllowed = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

type Props<Tag extends TagsAllowed> = {
  component?: Tag;
  variant?: 'h1' | 'h2' | 'h3';
} & DynamicProps[Tag];

const Heading = <Tag extends TagsAllowed = 'h2'>({
  children,
  component,
  className,
  variant = 'h2',
  ...rest
}: Props<Tag>) =>
  React.createElement(
    component || 'h2',
    {
      className: classNames(
        {
          'text-5xl': variant === 'h1',
          'text-3xl': variant === 'h2',
          'text-2xl': variant === 'h3',
        },
        className,
      ),
      ...rest,
    },
    children,
  );

export default Heading;
