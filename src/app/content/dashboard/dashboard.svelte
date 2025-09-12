<script lang="ts">	
	// ---------- Imports ----------
	// sveltes

	// libs

	// apps
	import type { Item } from 'app/comps/dashboard/item';
	import List from 'app/comps/dashboard/list.svelte';

	// ---------- Declaration and Logics ----------
	const data: Item[] = [
		{
			title: 'Column-1',
			icon: 'bi bi-dash-lg',
			href: '/Sampel-1',
			count: 10
		},
		{
			title: 'Column-2',
			icon: 'bi bi-folder-symlink-fill',
			href: '/sampel-2',
			count: 20
		},
		{
			title: 'Column-3',
			icon: 'bi bi-people-fill',
			href: '/users',
			count: 20
		},
		{
			title: 'Column-4',
			icon: 'bi bi-people-fill',
			href: '/users',
			count: 20
		}	
	];
</script>

<div class="container max-w-[1200px] mx-auto p-4 xl:p-0">
	<List {data} />
</div>
