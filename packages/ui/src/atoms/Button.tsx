import React from 'react';
import classNames from 'classnames';

type TagsAllowed = 'a' | 'button' | 'span';
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

type Props<Tag extends TagsAllowed> = {
  component?: Tag;
  variant?: 'primary' | 'secondary';
} & DynamicProps[Tag];

const Button = <Tag extends TagsAllowed = 'button'>({
  component,
  children,
  variant = 'primary',
  className,
  ...rest
}: Props<Tag>) =>
  React.createElement(
    component || 'button',
    {
      className: classNames(
        'font-bold uppercase py-2 px-4 rounded',
        {
          'bg-genoa-400 hover:bg-genoa-500 text-white ': variant === 'primary',
          'border-genoa-400 border-2 text-genoa-400': variant === 'secondary',
        },
        className,
      ),
      ...rest,
    },
    children,
  );

export default Button;
