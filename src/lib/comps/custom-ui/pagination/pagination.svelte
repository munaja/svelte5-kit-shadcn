<script lang="ts">
	// --------- Imports
	// sveltes
	import { goto } from "$app/navigation";
	import { MediaQuery } from "svelte/reactivity";
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	
	// libs
	import * as PaginationComp from "lib/comps/shadcn-ui/pagination/index.js";

	// apps
	import { type LinkData, type Pagination, genPagination } from './pagination';

	// ---------- Properties
	interface Props {
		data: Pagination;
		skipUrl?: boolean;
		url?: URL;
		onPageChange?: (targetUrl: string) => void;
	}

	let {
		data = $bindable(genPagination()),
		skipUrl = false,
		url = page.url,
		onPageChange,
	}: Props = $props();

	// ---------- Declarations and Logics
	const isDesktop = new MediaQuery("(min-width: 768px)");
	const perPage = $derived(isDesktop.current ? 3 : 8);
	const siblingCount = $derived(isDesktop.current ? 1 : 0);
	const shownLinOddMode = data.shownLinkCount % 2 == 0 ? false : true;

	let linkEndReducer = 0;
	let shownLinkMid = Math.ceil(data.shownLinkCount / 2);
	let linkCount = 0;
	let linkIdxStart = getpageStart();
	let linkIdxEnd = linkIdxStart + data.shownLinkCount - 1;
	let linkData: LinkData[] = $state([]);
	let nonPaginationParams = '';

	let wiw = 0;
	let mounted = $state(false);

	$effect(() => {
		if (mounted && (data.number || data.size)) {
			linkCount = Math.ceil(data.recordTotalCount / data.size);
			linkIdxStart = getpageStart();
			linkIdxEnd = linkIdxStart + data.shownLinkCount;
		}
		if (linkIdxEnd > linkCount) {
			linkIdxEnd = linkCount;
		}
		if (linkCount > 1) {
			url.searchParams.delete(data.numberKey);
			url.searchParams.delete(data.sizeKey);
			nonPaginationParams = url.searchParams.toString();
			const paramConnector = url.searchParams.size == 0 ? '' : '&';
			const tempData: LinkData[] = [];

			const linkDataCount = shownLinOddMode ? linkIdxEnd - linkEndReducer : linkIdxEnd;
			for (let i = linkIdxStart; i <= linkDataCount; i++) {
				tempData.push({
					page_number: i,
					path:
						data.path + '?' + nonPaginationParams + paramConnector + `${data.numberKey}=${i}&${data.sizeKey}=${data.size}`
				});
			}
			linkData = tempData;
		}

	});

	onMount(() => {
		mounted = true;
		if (!data.path) {
			data.path = window.location.pathname;
		}
	});

	function getpageStart(): number {
		linkEndReducer = 1;
		if (data.number <= shownLinkMid) {
			return 1;
		} else if (data.number >= linkCount - shownLinkMid) {
			linkEndReducer = 0;
			return Math.max(linkCount - data.shownLinkCount + (shownLinOddMode ? 0 : 1), 1);
		} else {
			return data.number - shownLinkMid;
		}
	}

	function setPage(p?: number) {
		const queryParam = `?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${data.numberKey}=${p}`;
		if (!skipUrl) {
			goto(`${data.path}${queryParam}`);
		} else {
			data.number = p ?? 1;
			if (onPageChange) {
				onPageChange(queryParam);
			}
		}
	}
</script>
 
<PaginationComp.Root count={data.recordTotalCount} perPage={data.shownLinkCount} {siblingCount}>
	{#snippet children()}
		<PaginationComp.Content>
			<PaginationComp.Item>
				<PaginationComp.PrevButton onclick={() => { setPage(1) }}>
					<span class="hidden sm:block">Previous</span>
				</PaginationComp.PrevButton>
			</PaginationComp.Item>
			{#each linkData as item}
				<PaginationComp.Item onclick={() => setPage(item.page_number)}>
					<PaginationComp.Link page={{ type: 'page', value: item.page_number}} isActive={data.number === item.page_number}>
						{item.page_number}
					</PaginationComp.Link>
				</PaginationComp.Item>
			{/each}
			<PaginationComp.Item>
				<PaginationComp.NextButton>
					<span class="hidden sm:block">Next</span>
				</PaginationComp.NextButton>
			</PaginationComp.Item>
			<!--
			<PaginationComp.Item>
				<PaginationComp.PrevButton>
					<span class="hidden sm:block">Previous</span>
				</PaginationComp.PrevButton>
			</PaginationComp.Item>
			{#each pages as page (page.key)}
				{#if page.type === "ellipsis"}
					<PaginationComp.Item>
					<PaginationComp.Ellipsis />
					</PaginationComp.Item>
				{:else}
					<PaginationComp.Item>
						<PaginationComp.Link {page} isActive={currentPage === page.value}>
							{page.value}
						</PaginationComp.Link>
					</PaginationComp.Item>
				{/if}
			{/each}
			<PaginationComp.Item>
				<PaginationComp.NextButton>
					<span class="hidden sm:block">Next</span>
				</PaginationComp.NextButton>
			</PaginationComp.Item>
			 -->
			<!-- {#if !skipUrl} -->
				<!-- {#if pagination.number != 1}
					<a href={`${pagination.path}?${nonPaginationParams}`}>
						<i class="bi bi-chevron-bar-left"></i>
					</a>
					<a
						href={`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${pagination.number > 1 ? pagination.number - 1 : 1}`}
					>
						<i class="bi bi-chevron-left"></i>
					</a>
				{/if} -->
				<!-- {#if pagination.number != linkCount}
					<a
						href={`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${pagination.number < linkCount ? pagination.number + 1 : linkCount}`}
					>
						<i class="bi bi-chevron-right"></i>
					</a>
					<a
						href={`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${linkCount}`}
					>
						<i class="bi bi-chevron-bar-right"></i>
					</a>
				{/if} -->
			<!-- {:else}
				{#if pagination.number != 1}
					<button on:click={() => setPage()}>
						<i class="bi bi-chevron-bar-left"></i>
					</button>
					<button
						on:click={() =>
							setPage(
								pagination.number > 1 ? pagination.number - 1 : 1,
								`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${linkCount}`
							)}
					>
						<i class="bi bi-chevron-left"></i>
					</button>
				{/if}
				{#each linkData as item}
					<button
						on:click={() => setPage(item.page_number, item.path)}
						class={item.page_number == pagination.number ? 'active' : ''}
					>
						{item.page_number}
					</button>
				{/each}
				{#if pagination.number != linkCount}
					<button
						on:click={() =>
							setPage(
								pagination.number < linkCount ? pagination.number + 1 : linkCount,
								`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${linkCount}`
							)}
					>
						<i class="bi bi-chevron-right"></i>
					</button>
					<button
						on:click={() =>
							setPage(
								linkCount,
								`${pagination.path}?${nonPaginationParams}${nonPaginationParams.length == 0 ? '' : '&'}${pagination.numberKey}=${linkCount}`
							)}
					>
						<i class="bi bi-chevron-bar-right"></i>
					</button>
				{/if}
			{/if} -->
		</PaginationComp.Content>
	{/snippet}
</PaginationComp.Root>