<script lang="ts">
	// ---------- Imports ----------
	// sveltes
	import { getContext } from 'svelte';
	import { type Readable } from 'svelte/store';
	
	// libs
	import * as Card from "lib/comps/shadcn-ui/card";
	import Button from "lib/comps/shadcn-ui/button/button.svelte";
	
	// apps, actually still libs
	import type { Props } from "./frame";
	import Input from "lib/comps/shadcn-ui/input/input.svelte";


	// ---------- Props (Legacy: Exports) ----------
	// wrapperDefaultClass = 'min-h-lvh relative flex justify-center items-center py-3 xl:py-4 px-3 xl:px-0',
	let {
		wrapperDefaultClass = 'p-4 xl:p-5',
		wrapperClass = '',
		innerDefaultClass = '',
		innerClass = '',
		size = 'lg',
		header = undefined,
		children,
		focusNavId,
	}: Props = $props();

	// ---------- Declaration and Logics ----------
	// const chClass = 'px-4 xl:px-5 py-2.5 xl:py-3.5 border-b';
	// const ccClass = 'p-4 xl:p-5';
	const chClass = 'border-b';  
	const ccClass = '';

	let sizeClass = $state('container-lg');
	let headerTitelClass = $state('');

	const navFocusIdCtx: Readable<string> = getContext('headerNavFocusId'); // all nav
	const buttonClickCtx: Readable<string> = getContext('headerButtonClick'); // buttons 
	const inputValuesCtx: Readable<any[]> = getContext('headerInputValues'); // inputs

	// initial
	checkSize(size);
	checkHeader(header);

	$effect(() => {
		checkSize(size);
		checkFocus($navFocusIdCtx);
	});

	// ---------- Functions ----------
	function checkSize(size: string) {
		if (size == 'xl') sizeClass = 'container-xl';
		else if (size == 'lg') sizeClass = 'container-lg';
		else if (size == 'md') sizeClass = 'container-md';
		else if (size == 'sm') sizeClass = 'container-sm';
		else if (size == 'default') sizeClass = 'container';
		else sizeClass = '2xl:mx-5';
	}

	function checkFocus(id?: string) {
		if (!id) {
			return;
		}
		document.getElementById(id)?.focus();
		$navFocusIdCtx = ''; // clean for the next action
	}

	function checkHeader(header: any) {
		if (header && header.nav && header.nav.length > 0) {
			headerTitelClass = 'pt-1.5';
		}
	}

	// nav that specific to button
	function buttonClick(idx: number) {
		$buttonClickCtx = header?.nav![idx].label || '';
	}
</script>

<div class={`${sizeClass} ${wrapperDefaultClass} ${wrapperClass}`}>
	<Card.Root class="w-full">
		{#if header}
			<Card.Header class={`${chClass}`}>
				<Card.Title class="text-sm xl:text-base flex">
					{#if header.title}
						<div class={headerTitelClass}>
							{#if header.icon}
								<i class={`${header.icon} me-2`}></i>
							{/if}
							{header.title}
						</div>
					{/if}
					{#if header.nav && header.nav.length > 0}
						<div class="w-[50%] ms-auto [&>*]:mx-1 flex">
							{#each header.nav as item, idx}
								{#if item.type === 'button'}
									<Button onclick={() => buttonClick(idx)}>{item.label}</Button>
								{:else if item.type === 'input'}
									<Input id={item.id} placeholder={item.label} bind:value={$inputValuesCtx[idx]} />
								{:else if item.type === 'href'}
									<a href={item.value}>{item.label}</a>
								{/if}
							{/each}
						</div>
					{/if}
				</Card.Title>
			</Card.Header>
		{/if}
		<Card.Content class={`${ccClass}`}>
			<div class={`${innerDefaultClass} ${innerClass}`}>
				{@render children?.()}
			</div>
		</Card.Content>
		<!-- <Card.Footer>
		</Card.Footer> -->
	</Card.Root>
</div>

<style>
	/* the container */
	.container-2xl,
	.container-xl,
	.container-lg,
	.container-md,
	.container-sm {
		@apply container mx-auto;
	}
	.container {
		max-width: 1480px;
	}
	.container-xl {
		max-width: 1200px;
	}
	.container-lg {
		max-width: 992px;
	}
	.container-md {
		max-width: 768px;
	}
	.container-sm {
		max-width: 576px;
	}
</style>
