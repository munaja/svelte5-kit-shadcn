<script lang="ts">
	// ---------- Imports ----------	
	// sveltes
	import type { Snippet } from "svelte";
	import { type BreakPoint, breakPoints, getBreakpointIdx } from "./utility";

	// ---------- Props (Legacy: Exports) ----------
	interface Props {
		// breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // for dynamic font size
		// size?: 'default' | 'narrow' | 'wide';
		height?: 'default' | 'compact';
		position?: 'default' | 'dynamic';
		positionPoint?: BreakPoint; // for dynamic font size
		class?: string;
		children?: Snippet,
		// restProps?: any,
	};
	let {
		// breakPoint = 'xl',
		// size = 'default',
		height = 'default',
		position = 'default',
		positionPoint = 'lg',
		class: classVal,
		children,
		...restProps
	}: Props = $props();

	// ---------- Declarations & Logic
	// const breakPointIdx = getBreakpointIdx(breakPoint);

	// svelte-ignore non_reactive_update
	let settingClass = 'label';
	if (height == 'compact') {
		settingClass += ' height-compact ';
	} else {
		settingClass += ' height-default ';
	}

	if (position == 'dynamic') {
		settingClass += ' ' + [
			'text-end pe-2.5',
			'sm:text-end pe-2.5',
			'md:text-end pe-2.5',
			'lg:text-end pe-2.5',
			'xl:text-end pe-2.5',
			'2xl:text-end pe-2.5'][getBreakpointIdx(positionPoint)];
	} else {
		// positionClass += 'text-start pe-2';
	}
</script>

<div class={`${settingClass} ${classVal?.trim() || ''}`} {...restProps}>
	<label> 
		{@render children?.()}
	</label>
</div>

<!-- <style>
	.label {
		@apply block shrink-0 text-xs xl:text-sm 2xl:text-base;
	}
</style> -->