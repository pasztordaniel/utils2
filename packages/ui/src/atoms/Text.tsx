import classNames from 'classnames';
import React from 'react';

type TagsAllowed = 'p' | 'span';
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

type Props<Tag extends TagsAllowed> = {
  component?: Tag;
} & DynamicProps[Tag];

const Text = <Tag extends TagsAllowed = 'p'>({
  children,
  component,
  className,
  ...rest
}: Props<Tag>) =>
  React.createElement(
    component || 'p',
    {
      className: classNames(className),
      ...rest,
    },
    children,
  );

export default Text;
