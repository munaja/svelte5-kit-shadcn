import Root from "./combobox.svelte";

export {
	Root,
	Root as ComboBox,
};

export interface Item {
	value: any;
	label: string;
	icon?: string;
}

export type Items = Item[];

export function recStrToItem(input: Record<string, string>): Items {
	const result: Items = [];
	for (const key in input) {
		result.push({
			value: key,
			label: input[key],
		});
	}
	return result;
}

export function arrayToItems(input: any[]): Items {
	return input.map(item => ({
		value: typeof item === 'string' ? item : String(item),
		label: typeof item === 'string' ? item : String(item)
	}));
}


export function arrayToIndexedItems(input: any[]): Items {
	return input.map((item, idx) => ({
		value: idx,
		label: typeof item === 'string' ? item : String(item)
	}));
}

export function arrayObjectToItems(input: any[], valueKey: string, labelKey: string): Items {
	return input.map(item => ({
		value: item[valueKey],
		label: item[labelKey],
		icon: item.icon
	}));
}
