<script lang="ts">
	import type { RecStrStr } from '@/types/record';
	import { type RecStrFuncUnknown, type RecStrFuncComponent } from './types';
	import { type Th, type Col } from './types';
	import Colgroup from './table-colgroup.svelte';
	import THead from './table-thead.svelte';
	import TBody from './table-tbody.svelte';

	interface Props {
		cols?: Col[];
		header?: Th[][];
		keys: string[];
		data?: object[];
		funcHtml?: RecStrFuncUnknown;
		funcParsed?: RecStrFuncUnknown;
		funcComponent?: RecStrFuncComponent;
		rowStart?: number;
		usePlaceHolder?: boolean;
		placeHolderText?: string;
		defaultClass?: string;
		class?: string;
	}

	let {
		cols,
		header,
		keys,
		data,
		funcHtml,
		funcParsed,
		funcComponent,
		rowStart = 1,
		usePlaceHolder = true,
		placeHolderText = 'No data found...',
		defaultClass = 'w-full bg-white dark:bg-slate-800 text-xs xl:text-sm [&_tr]:border-b [&_tr]:border-b-neutral-300 [&_tr:hover]:bg-gray-50 dark:[&_tr:hover]:bg-slate-700',
		class: classVal = '',
	}: Props = $props();

	let cellClass: RecStrStr = {};
	let cellStyle: RecStrStr = {};

	if (typeof cols == 'object') {
		for (let i = 0; i < keys.length; i++) {
			if (i < cols.length) {
				cellClass[keys[i]] = cols[i].classVal || '';
				cellStyle[keys[i]] = cols[i].style || '';
			}
		}
	}
</script>

<table class="{defaultClass} {classVal}">
	{#if typeof cols == 'object'}
		<Colgroup data={cols} />
	{/if}
	{#if typeof header == 'object'}
		<THead data={header} {keys} {cellClass} {cellStyle} />
	{/if}
	{#if typeof data == 'object'}
		{#if data.length > 0}
			<TBody {data} {keys} {cellClass} {cellStyle} {rowStart} {funcParsed} {funcHtml} {funcComponent} />
		{:else if usePlaceHolder}
			<tbody>
				<tr>
					<td colspan={keys.length} class="text-center">
						<div class="py-5">{placeHolderText}</div>
					</td>
				</tr>
			</tbody>
		{/if}
	{/if}
</table>
