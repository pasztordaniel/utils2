import classNames from 'classnames';
import React from 'react';

type TagsAllowed =
  | 'div'
  | 'article'
  | 'aside'
  | 'section'
  | 'main'
  | 'blockquote';
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

type Props<Tag extends TagsAllowed> = {
  component?: Tag;
} & DynamicProps[Tag];

const Card = <Tag extends TagsAllowed = 'div'>({
  component,
  children,
  className,
  ...rest
}: Props<Tag>) =>
  React.createElement(
    component || 'div',
    {
      className: classNames(
        'bg-neutral-50 dark:bg-neutral-700 rounded',
        className,
      ),
      ...rest,
    },
    children,
  );

export default Card;
