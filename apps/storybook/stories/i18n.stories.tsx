import { Text } from '@package/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from '@package/i18n';

const I18nTest: React.FC = () => {
  const { t } = useTranslation();
  return <Text>{t('common.test')}</Text>;
};

type Story = StoryObj<typeof I18nTest>;

const meta: Meta<typeof i18n> = {
  title: 'i18n',
  component: I18nTest,
  argTypes: {},
};

export default meta;

export const i18n: Story = {
  render: ({ ...args }) => <I18nTest {...args} />,
};
