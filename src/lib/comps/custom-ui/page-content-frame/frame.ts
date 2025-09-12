interface Elm {
	type: 'button' | 'input' | 'href';
	label: string;
	value: string;
	index: number;
	id: string;
	event: () => void;
}

export interface Header {
	title?: string;
	icon?: string;
	nav?: Elm[];
}

export interface Props {
	wrapperDefaultClass?: string;
	wrapperClass?: string;
	innerDefaultClass?: string;
	innerClass?: string;
	size?: 'default' | 'xl' | 'lg' | 'md' | 'sm'; 
	title?: string;
	titleIcon?: string;
	header?: Header;
	children?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	focusNavId?: string;
}
