/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render, screen } from '@testing-library/react';
import Heading from '../../src/atoms/Heading';

const text = 'Lorem ipsum dolor sit amet';

describe('Heading', () => {
  it('render heading', () => {
    render(<Heading>{text}</Heading>);
    const heading = screen.getByText(text);
    expect(heading).toBeInTheDocument();
    cleanup();
  });
});
