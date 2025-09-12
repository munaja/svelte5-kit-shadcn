<script lang="ts">
	// ---------- Imports ----------
	import * as Card from "lib/comps/shadcn-ui/card";

	// ---------- Props ----------
	let { data, ...restProps }: { data: string, [key: string]: any } = $props();
</script>

<Card.Root {...restProps}>
	<Card.Content>
		{ data }
	</Card.Content>
</Card.Root>
