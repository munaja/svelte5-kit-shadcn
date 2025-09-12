<script lang="ts">
	// ---------- Imports
	// sveltes
	import type { Snippet } from "svelte";

	// libs
	import * as Dialog from "lib/comps/shadcn-ui/dialog";
	import CanSub from "@/comps/my-ui/page-nav/can-sub.svelte";

	// ---------- Props
	interface Props {
		show: boolean;
		title: string;
		message?: Snippet;
		onSubmit: () => void;
		onCancel: () => void;
	};
	let {
		show = $bindable(),
		title,
		message,
		onSubmit,
		onCancel
	}: Props = $props();
</script>

<Dialog.Root bind:open={show}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
		</Dialog.Header>
		
		<div class="py-4">
			{#if message}
				{@render message()}
			{/if}
		</div>
		
		<Dialog.Footer>
			<CanSub {onSubmit} {onCancel} />
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>