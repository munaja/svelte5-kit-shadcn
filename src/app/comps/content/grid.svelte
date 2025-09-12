<script lang="ts">
	// ---------- Imports ----------
	// apps
	import Item from './grid-item.svelte';

	// ---------- Props ----------
	let { data }: { data: string[] } = $props();
	
</script>

<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
	{#each data as item}
		<Item data={item} class="mb-4 md:mb-0" />
	{/each}
</div>
