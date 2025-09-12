<script lang="ts">	
	// ---------- Imports ----------
	// sveltes

	// libs

	// apps
	import { type Item as ItemType } from 'app/comps/dashboard/item';
	import Item from 'app/comps/dashboard/item.svelte';

	// ---------- Declaration and Logics ----------
	let { data }: { data: ItemType[] } = $props();
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 [&_.title]:font-semibold [&_.number]:text-[50px]"> 
	{#each data as item}
		<Item data={item} />
	{/each}
</div>
