import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@package/ui';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'atoms/Card',
  component: Card,
  argTypes: {},
};

export default meta;

export const card: Story = {
  render: ({ ...args }) => (
    <Card {...args} className="p-4">
      Lorem ipsum dolor sit amet
    </Card>
  ),
};
