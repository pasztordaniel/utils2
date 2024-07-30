/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render, screen } from '@testing-library/react';
import Card from '../../src/atoms/Card';

const text = 'Lorem ipsum dolor sit amet';

describe('Card', () => {
  it('render card', () => {
    render(<Card>{text}</Card>);
    const card = screen.getByText(text);
    expect(card).toBeInTheDocument();
    cleanup();
  });
});
