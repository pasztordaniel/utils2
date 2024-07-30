/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render, screen } from '@testing-library/react';
import Button from '../../src/atoms/Button';

const text = 'Click me!';

describe('Button', () => {
  it('render button', () => {
    render(<Button>{text}</Button>);
    const btn = screen.getByText(text);
    expect(btn).toBeInTheDocument();
    cleanup();
  });
});
