import type { Meta, StoryObj } from '@storybook/react';
import { IdePage, IdePageProps } from './';

const meta = {
  component: IdePage,
} satisfies Meta<typeof IdePage>;

export default meta;

type Story = StoryObj<typeof meta>;

const props: IdePageProps = { };

export const IdePageStory: Story = {
  args: props
};
