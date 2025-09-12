<script lang="ts">
	import { cn } from "@/scripts/utils";
	// ---------- Imports ----------	
	// sveltes
	import type { Snippet } from "svelte";

	// ---------- Props (Legacy: Exports) ----------
	interface Props {
		colSpan?: number;
		colStart?: number;
		colEnd?: number;
		class?: string;
		children?: Snippet,
	};
	let {
		colSpan,
		colStart,
		colEnd,
		class: classVal,
		children
	}: Props = $props();

	// ---------- Declarations & Logic
	// let positionClass = $state('position-default');

	// svelte-ignore non_reactive_update
	let settingClass = 'cell';
	if (colSpan) {
		settingClass += ' ' + [
			'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5',
			'col-span-6', 'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10',
		][colSpan - 1];
	}

	if (colStart) {
		settingClass += ' ' + [
			'col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5',
			'col-start-6', 'col-start-7', 'col-start-8', 'col-start-9', 'col-start-10',
		][colStart - 1];
	}

	if (colEnd) {
		settingClass += ' ' + [
			'col-end-1', 'col-end-2', 'col-end-3', 'col-end-4', 'col-end-5',
			'col-end-6', 'col-end-7', 'col-end-8', 'col-end-9', 'col-end-10',
		][colEnd - 1];
	}
</script>

<div class={cn(settingClass, classVal?.trim() || '')}>
	{@render children?.()}
</div>
