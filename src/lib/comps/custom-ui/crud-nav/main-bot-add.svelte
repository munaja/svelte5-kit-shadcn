<script lang="ts">
	// ---------- Imports ----------
	import Button from "lib/comps/shadcn-ui/button/button.svelte";

	// ---------- Exports ----------
	interface Props {
		onAdd: () => void;
	};
	let { onAdd }: Props = $props();
</script>

<div class="mb-5">
	<Button  onclick={onAdd}>
		<i class="bi bi-plus-lg"></i>
		Add
	</Button>
</div>