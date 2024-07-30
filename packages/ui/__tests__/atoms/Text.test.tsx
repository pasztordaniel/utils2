/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render, screen } from '@testing-library/react';
import Text from '../../src/atoms/Text';

const text = 'Lorem ipsum dolor sit amet';

describe('Text', () => {
  it('render text', () => {
    render(<Text>{text}</Text>);
    const txt = screen.getByText(text);
    expect(txt).toBeInTheDocument();
    cleanup();
  });
});
