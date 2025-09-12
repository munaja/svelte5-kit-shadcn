<script lang="ts">
	// ---------- Imports ----------
	import Button from "lib/comps/shadcn-ui/button/button.svelte";

	
	// ---------- Exports ----------
	interface Props {
		onCancel: () => void;
		onSubmit: () => void;
	};
	let { onSubmit, onCancel }: Props = $props();
</script>

<div class="text-center">
	<Button variant="negative" onclick={onCancel}>
		<i class="bi bi-x-lg"></i>
		Cancel
	</Button>
	<Button onclick={onSubmit}>
		<i class="bi bi-check-lg"></i>
		Submit
	</Button>
</div>
