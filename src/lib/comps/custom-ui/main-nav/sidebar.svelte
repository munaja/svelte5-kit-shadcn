<script lang="ts">
	// ---------- Imports ----------
	// sveltes
	import type { ComponentProps } from "svelte";

	// libs
	import * as Sidebar from "lib/comps/shadcn-ui/sidebar/index.js";

	// apps
	import SidebarItem from "./sidebar-item.svelte";
	import AppLogo from "./app-logo.svelte";
	import type { SidebarGroup } from "./tycovar";

	// ---------- Props (Legacy: Exports) ----------
	let {
		data,
		ref = $bindable(null),
		collapsible = "icon",
		children,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { data: SidebarGroup[] } = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header>
		<AppLogo />
	</Sidebar.Header>
	<Sidebar.Content>
		<SidebarItem {data} />
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
