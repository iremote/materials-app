import type { Meta, StoryObj } from '@storybook/react';
import StructureViewer, { StructureViewerProps } from './StructureViewer';

const meta: Meta<typeof StructureViewer> = {
	component: StructureViewer,
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleXYZStructure1 = `
	3
	water molecule
	O 0.000000 0.000000 0.000000
	H 0.758602 0.504284 0.000000
	H 0.758602 -0.504284 0.000000
`;

const sampleXYZStructure2 = `
	5
	pentane
	C -0.0126981359 1.0858041578 0.0021503161
	H 0.0021502327 1.5878144366 0.9190941638
	H 0.8684345912 1.5877379234 -0.4772385291
	H -0.8771351712 1.5877293334 -0.4772264852
	C -0.0127044225 -0.4301787073 0.0021379428
`;

const props1: StructureViewerProps = {
	structure: sampleXYZStructure1,
};

const props2: StructureViewerProps = {
	structure: sampleXYZStructure2,
};

export const WaterMolecule: Story = {
	args: props1,
};

export const Pentane: Story = {
	args: props2,
};
