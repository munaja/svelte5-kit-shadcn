<script lang="ts">
	import { cn, type WithElementRef } from "$lib/scripts/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card-header"
	class={cn(
		"@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-1.5 [.border-b]:xl:pb-2.5 [.border-b]:pt-0 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 xl:px-5 2xl:px-6",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
