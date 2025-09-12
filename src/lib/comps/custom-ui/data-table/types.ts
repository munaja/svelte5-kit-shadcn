import type { Component } from 'svelte';
import type { FuncVoid } from '@/types/function';

export interface ListItemDto {
	id: number;
	name: string;
	code: string;
}

export interface RecComponent {
	data: object;
	props?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	component: Component;
}

export interface Col {
	span?: number;
	classVal?: string;
	style?: string;
	width?: number; // specific for width
	widthUnit?: string; // specific for width
}

export interface Th {
	label: string;
	colSpan?: number;
	rowSpan?: number;
	classVal?: string;
	childClassVal?: string;
	style?: string;
	childStyle?: string;
	hideOnSm?: boolean;
}

export interface ButtonNav {
	classVal?: string;
	classValExt?: string;
	icon?: string;
	label: string;
	onClick(): void;
}

export interface QuickSearchNav {
	inputClass?: string;
	inputPlaceHolder?: string;
	btnClass?: string;
	btnIcon?: string;
	btnLabel?: string;
	mainField?: string;
	searchParams: object;
	onSubmit?: FuncVoid;
}

export interface RefSearchNav {
	value: string;
	onClick(): void;
	onClear(): void;
}

// prepared header for relatively common usage
export interface HeaderPrep {
	title?: string;
	icon?: string;
	refSearchNav?: RefSearchNav;
	quickSearchNav?: QuickSearchNav;
	filterNav?: ButtonNav;
	addNav?: ButtonNav;
	printNav?: ButtonNav;
}

export interface KeyLabel {
	key: string;
	label: string;
}
export type FuncRecUnknown = (rec: unknown, idx: number) => unknown;
export type FuncComponent = (rec: unknown, idx: number) => RecComponent;
export type RecStrFuncUnknown = Record<string, FuncRecUnknown>;
export type RecStrFuncComponent = Record<string, FuncComponent>;

export interface KeyNames {
	key: string;
	label: string;
}

export const BTN_CIRCLE = '[&_button]:w-7 [&_button]:h-7 [&_button]:xl:w-8 [&_button]:xl:h-8 [&_button]:2xl:w-9 [&_button]:2xl:h-9 !p-0 [&_button]:rounded-full [&_button]:[&_tr]:cursor-pointer';