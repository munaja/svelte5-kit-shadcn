<script lang="ts">
	// ---------- Imports ----------	
	// sveltes
	import type { Snippet } from "svelte";
	import { type BreakPoint, type LabelSize, getLabelSizeIdx, getBreakpointIdx } from "./utility"; 

	// ---------- Props (Legacy: Exports) ----------
	interface Props {
		mode?: 'entry' | 'view';
		gridPoint?: BreakPoint;
		cellFlex?: boolean;
		cellFlexPoint?: BreakPoint;
		labelSize?: LabelSize;
		labelSizePoint?: BreakPoint;
		colCount?: number;
		defaultClass?: string;
		class?: string
		children?: Snippet,
	};
	let {
		gridPoint = 'lg',
		cellFlex = true,
		cellFlexPoint = 'md',
		labelSize = 'medium',
		colCount = 1,
		defaultClass = 'mb-5',
		class: classVal,
		children }: Props = $props();

	// ---------- Declarations & Logic
	// WARNING: some xs breakpoint doesn't work for some reason, the style doesn't really need it anyway
	const breakPointIdx = getBreakpointIdx(gridPoint);

	// svelte-ignore non_reactive_update
	// grif base
	// let settingClass = `${gridPoint}:grid gap-1.5 xl:gap-2 grid-cols-1`; // failed
	let settingClass = ['grid','sm:grid','md:grid','lg:grid','xl:grid','2xl:grid'][breakPointIdx];

	// grid column count
	// settingClass += ` grid-cols-${colCount}`; // failed
	settingClass += ' gap-4 xl:gap-5 ' + [
		'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5',
		'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10',
	][colCount - 1];

	// non grid
	// let settingClass = `${gridPoint}:grid gap-1.5 xl:gap-2 grid-cols-1`; // failed
	settingClass += breakPointIdx == 0 ? ' gap-3 ' : '';
	settingClass += ' ' + [
		' [&_.cell]:!mb-0',
		' [&_.cell]:mb-2.5 [&_.cell]:sm:mb-0',
		' [&_.cell]:mb-2.5 [&_.cell]:md:mb-0',
		' [&_.cell]:mb-2.5 [&_.cell]:lg:mb-0',
		' [&_.cell]:mb-3 [&_.cell]:xl:mb-0',
		' [&_.cell]:mb-3 [&_.cell]:2xl:mb-0',
	][getBreakpointIdx(gridPoint)];

	// cell content posititioning
	if (cellFlex) {
		// label position, side for flex, else top
		settingClass += ' ' + [
			'[&_.cell]:flex',
			'[&_.cell]:sm:flex',
			'[&_.cell]:md:flex',
			'[&_.cell]:lg:flex',
			'[&_.cell]:xl:flex',
			'[&_.cell]:2xl:flex',
		][getBreakpointIdx(cellFlexPoint)];
		// settingClass += ` [&_.cell]${cellFlexPoint != '' ? `:${cellFlexPoint}` : ''}:flex`;

		// media query doesnt work with dynamic value
		// settingClass += ' [&_.label]:w-' + [20, 24, 28, 32, 36][getLabelSizeIdx(labelSize)];

		settingClass += ' [&_.label]:sm:pt-2 ' + [
			'[&_.label]:md:w-12 [&_.label]:xl:w-20',
			'[&_.label]:md:w-16 [&_.label]:xl:w-24',
			'[&_.label]:md:w-24 [&_.label]:xl:w-32',
			'[&_.label]:md:w-32 [&_.label]:xl:w-40',
			'[&_.label]:md:w-44 [&_.label]:xl:w-52'][getLabelSizeIdx(labelSize)];
	}

	// adjust all fields according to the field size
	settingClass += ' ' +
		// '[&_button]:w-full [&_button]:h-8 [&_button]:xl:h-9 [&_button]:2xl:!h-10 [&_button]:text-xs [&_button]:xl:text-sm ' +
		// '[&_input]:h-9 [&_input]:xl:!h-10 [&_input]:text-xs [&_input]:xl:text-sm ' +
		// // '[&_select]:h-9 [&_select]:xl:h-10 [&_select]:text-xs [&_select]:xl:text-sm ' +
		// // '[&_.option]:text-xs [&_.option]:xl:text-sm ' +
		'[&_.height-default]:pt-2 [&_.height-default]:2xl:!pt-1.5 [&_.height-compact]:!pt-1 ' + 
		'[&_textarea]:text-xs [&_textarea]:xl:text-sm ' +
		'[&_label]:text-xs [&_label]:xl:text-sm';

</script>

<!-- class="(--grid-cols)" style={`--grid-col-class: ${greatColClass};`}; failed -->
<div class={`block ${defaultClass} ${settingClass} ${classVal || ''}`}> <!-- style={`--grid-cols: ${colCount};`} DOESN'T WORK-->
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.block {
		/* @apply grid gap-1.5 xl:gap-2; */
	}
</style>
  