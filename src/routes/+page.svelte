<script lang="ts">
	// ---------- Imports ----------
	// sveltes
	import type { PageProps } from './$types';

	// apps
	import Content from 'app/content/dashboard/dashboard.svelte';

	
	// ---------- Props (Legacy: Exports) ----------
	let { data }: PageProps = $props();

	// ---------- Declaration and Logics ----------
	// ...
</script>

<Content />
