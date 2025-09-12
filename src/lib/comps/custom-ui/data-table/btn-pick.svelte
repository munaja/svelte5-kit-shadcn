<script lang="ts">
	// ---------- imports
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';

	import Button from "lib/comps/shadcn-ui/button/button.svelte";

	// ---------- Props
	type Props = {
		data: any;
		onClick: () => void;
	}
	let {
		data,
		onClick = () => {}
	}: Props = $props();

	// --------- Declaration
	const selectedData: Readable<any> = getContext('selectedData');

	function selectData() {
		$selectedData = data;
		onClick();
	};

</script>

<Button onclick={selectData} class="">
    <i class="bi bi-chevron-right"></i>    
</Button>
