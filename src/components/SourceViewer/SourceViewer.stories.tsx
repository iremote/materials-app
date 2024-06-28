import type {Meta, StoryObj} from '@storybook/react';
import {SourceViewer, SourceViewerProps} from './';

const meta = {
	component: SourceViewer,
} satisfies Meta<typeof SourceViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

const props: SourceViewerProps = {
	defaultValue: `
3
water molecule
O 0.000000 0.000000 0.000000
H 0.758602 0.504284 0.000000
H 0.758602 -0.504284 0.000000
`
};

export const SourceViewerStory: Story = {
	args: props
};
