import React from 'react';
import MonacoEditor from '@monaco-editor/react';

export interface SourceViewerProps {
	onChange?: (value: string) => void;
}

const SourceViewer: React.FC<SourceViewerProps> = ({onChange}) => {
	const handleEditorChange = (value: string | undefined) => {
		if (value !== undefined && onChange) {
			onChange(value);
		}
	};

	return (
		<MonacoEditor
			language="plaintext"
			theme="vs-dark"
			options={{
				padding: {
					top: 16,
					bottom: 16
				},
				minimap: {
					enabled: false
				},
				lineHeight: 1.8,
				automaticLayout: true,
				wordWrap: 'on',
				wrappingIndent: 'same',
				wrappingStrategy: 'advanced',
				scrollBeyondLastLine: false,
				scrollbar: {
					vertical: 'hidden',
					horizontal: 'hidden'
				},
			}}
			onChange={handleEditorChange}
		/>
	);
};

export default SourceViewer;
