import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@package/ui';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    component: {
      options: ['a', 'button', 'span'],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const button: Story = {
  render: ({ ...args }) => <Button {...args}>Button</Button>,
  args: {
    variant: 'primary',
    component: 'button',
  },
};
