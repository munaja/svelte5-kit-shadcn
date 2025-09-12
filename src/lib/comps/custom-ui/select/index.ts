import Root from './select.svelte';

export {
	Root,
}

export type Item = {
	value: any;
	label: string;
}
export type Items = Item[];

export function arrayToItems(input: any[]): Items {
	return input.map(item => ({
		value: item,
		label: typeof item === 'string' ? item : String(item)
	}));
}

export function arrayToIndexedItems(input: any[]): Items {
	return input.map((item, idx) => ({
		value: idx,
		label: typeof item === 'string' ? item : String(item)
	}));
}

export function arrayObjectToItems(input: any[], valueKey: any, labelKey: any): Items {
	return input.map(item => ({
		value: item[valueKey],
		label: item[labelKey]
	}));
}
