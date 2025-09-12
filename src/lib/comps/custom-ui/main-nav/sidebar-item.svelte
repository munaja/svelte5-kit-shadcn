<script lang="ts">
	// ---------- Imports ----------
	// libs
	import * as Collapsible from "lib/comps/shadcn-ui/collapsible/index.js";
	import * as Sidebar from "lib/comps/shadcn-ui/sidebar/index.js";

	// apps
	import type { SidebarGroup } from "./tycovar";

	// ---------- Props ----------
	let { data }: { data: SidebarGroup[] } = $props();
</script>

{#each data as group}
<Sidebar.Group>
	{#if group.title}
		<Sidebar.GroupLabel class="font-bold">{group.title}</Sidebar.GroupLabel>
	{/if}
	<Sidebar.Menu>
	  {#each group.items as item}
		{#if !item.items || item.items.length == 0}
			<Sidebar.MenuButton tooltipContent={item.title}>
				<a href={item.url} class="w-full">
					{#if item.icon}
					<i class={`${item.icon} me-2`}></i>
					{/if}
					<span>{item.title}</span>
				</a>
			</Sidebar.MenuButton>
		{:else}   
			<Collapsible.Root open={item.isActive} class="group/collapsible">
				{#snippet child({ props })}
				<Sidebar.MenuItem {...props}>
				<Collapsible.Trigger>
					{#snippet child({ props })}
					<Sidebar.MenuButton {...props} tooltipContent={item.title}>
						{#if item.icon}
						<i class={`${item.icon} me-2 xl:me-2.5 2xl:me-3`}></i>
						{/if}
						<span>{item.title}</span>
						<i class="chevron-right ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"></i>
					</Sidebar.MenuButton>
					{/snippet}
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Sidebar.MenuSub>
					{#each item.items ?? [] as subItem (subItem.title)}
						<Sidebar.MenuSubItem>
						<Sidebar.MenuSubButton>
							{#snippet child({ props })}
							<a href={subItem.url} {...props}>
								<span>{subItem.title}</span>
							</a>
							{/snippet}
						</Sidebar.MenuSubButton>
						</Sidebar.MenuSubItem>
					{/each}
					</Sidebar.MenuSub>
				</Collapsible.Content>
				</Sidebar.MenuItem>
			{/snippet}
			</Collapsible.Root>
			{/if}
		{/each}
	</Sidebar.Menu>
  </Sidebar.Group>
{/each}
