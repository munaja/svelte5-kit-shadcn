<script lang="ts">
	// ---------- Imports
	// sveltes
	import type { Snippet } from "svelte";

	// libs
	import * as Dialog from "lib/comps/shadcn-ui/dialog";
	import CanSub from "@/comps/my-ui/page-nav/can-sub.svelte";

	// ---------- Props
	interface Props {
		open: boolean;
		showHeader?: boolean;
		title?: string;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		width?: number;
		showFooter?: boolean;
		children?: Snippet;
		onSubmit?: () => void;
		onCancel?: () => void;
	};
	let {
		open = $bindable(false),
		showHeader = true,
		title,
		size = 'md',
		width,
		showFooter = true,
		children,
		onSubmit = () => {},
		onCancel = () => {},
	}: Props = $props();

	// ----------- Declarations and logics
	let classVal = `
		${size == 'sm' ? '!w-[420px]' : ''}
		${size == 'md' ? '!max-w-[680px]' : ''}
		${size == 'lg' ? '!max-w-[960px]' : ''}
		${size == 'xl' ? '!max-w-[1200px]' : ''}
	`

	// ---------- Functions
	function getOpen() {
		return open;
	}
	
	function setOpen(newOpen: boolean) {
		open = newOpen;
	}
</script>

<Dialog.Root bind:open={getOpen, setOpen}>
	<Dialog.Content class={classVal}>
		{#if showHeader}
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
		</Dialog.Header>
		{/if}

		<div class="">
			{@render children?.()}
		</div>

		{#if showFooter}
		<Dialog.Footer>
			<CanSub {onSubmit} {onCancel} />
		</Dialog.Footer>
		{/if}
	</Dialog.Content>
</Dialog.Root>
