<script lang="ts">
	// ---------- Imports ----------
	import Button from "lib/comps/shadcn-ui/button/button.svelte";

	
	// ---------- Exports ----------
	interface Props {
		onBack: () => void;
		onEdit: () => void;
	};
	let { onBack, onEdit }: Props = $props();
</script>

<div class="text-center">
	<Button variant="negative" onclick={onBack}>
		<i class="bi bi-x-lg"></i>
		Back
	</Button>
	<Button onclick={onEdit}>
		<i class="bi bi-check-lg"></i>
		Edit
	</Button>
</div>
