import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarProps } from './';

const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const props: NavbarProps = {};

export const ToolbarStory: Story = {
  args: props
};
