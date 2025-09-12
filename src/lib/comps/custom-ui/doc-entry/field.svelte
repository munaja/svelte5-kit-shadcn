<script lang="ts">
	// ---------- Imports ----------	
	// sveltes
	import type { Snippet } from "svelte";

	// ---------- Props (Legacy: Exports) ----------
	interface Props {
		children?: Snippet;
		errMessage?: string;
		defaultClass?: string;
		class?: string;
	};
	let {
		children,
		errMessage,
		defaultClass = 'field grow shrink-0 overflow-hidden',
		class: classVal,
	}: Props = $props();
</script>

<div class={`${defaultClass} ${classVal}`}>
	{@render children?.()}
	{#if errMessage}
		<div class="text-red-500">{errMessage}</div>
	{/if}
</div>
