import type { Meta, StoryObj } from '@storybook/react';
import { SourceViewer, SourceViewerProps } from './';

const meta = {
  component: SourceViewer,
} satisfies Meta<typeof SourceViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

const props: SourceViewerProps = {

};

export const SourceViewerStory: Story = {
  args: props
};
