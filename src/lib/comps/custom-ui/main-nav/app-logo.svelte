<script lang="ts">
	// ---------- Imports ----------
	// sveltes
	import type { ComponentProps } from "svelte";

	// libs
		import * as Sidebar from "lib/comps/shadcn-ui/sidebar";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<Sidebar.MenuButton size="lg">
			{#snippet child({ props })}
				<a href="/" {...props}>
					<div
						class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-7 xl:size-8 items-center justify-center rounded-lg"
					>
						<i class="bi bi-layout-wtf"></i>
						<!-- <GalleryVerticalEndIcon class="size-4" /> -->
					</div>
					<div class="flex flex-col gap-0.5 leading-none">
						<span class="text-xs xl:text-sm 2xl:text-base font-semibold">Project Starter</span>
					</div>
				</a>
			{/snippet}
		</Sidebar.MenuButton>
	</Sidebar.MenuItem>
</Sidebar.Menu>
 