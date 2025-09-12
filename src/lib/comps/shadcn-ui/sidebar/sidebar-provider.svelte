<script lang="ts">
	import * as Tooltip from "$lib/comps/shadcn-ui/tooltip/index.js";
	import { cn, type WithElementRef } from "$lib/scripts/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import {
		SIDEBAR_COOKIE_MAX_AGE,
		SIDEBAR_COOKIE_NAME,
		MD_SIDEBAR_WIDTH,
		XL_SIDEBAR_WIDTH,
		XXL_SIDEBAR_WIDTH,
		SIDEBAR_ICON_WIDTH,
	} from "./constants.js";
	import { setSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		open = $bindable(true),
		onOpenChange = () => {},
		class: className,
		style,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	} = $props();

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);

			// This sets the cookie to keep the sidebar state.
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<Tooltip.Provider delayDuration={0}>
	<div
		data-slot="sidebar-wrapper"
		style="--md-sidebar-width: {MD_SIDEBAR_WIDTH}; --xl-sidebar-width: {XL_SIDEBAR_WIDTH}; --xxl-sidebar-width: {XXL_SIDEBAR_WIDTH}; --sidebar-icon-width: {SIDEBAR_ICON_WIDTH}; {style}"
		class={cn(
			"group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
			className
		)}
		bind:this={ref}
		{...restProps}
	>
		{@render children?.()}
	</div>
</Tooltip.Provider>
