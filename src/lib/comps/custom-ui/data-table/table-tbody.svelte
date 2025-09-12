<script lang="ts">
	import type { RecStrStr } from '@/types/record';
	import type { RecStrFuncComponent, RecStrFuncUnknown } from './types';
	import type { Component } from 'svelte';

	interface Props {
		keys: string[];
		data: object[];
		cellClass?: RecStrStr;
		cellStyle?: RecStrStr;
		rowStart?: number;
		funcParsed?: RecStrFuncUnknown;
		funcHtml?: RecStrFuncUnknown;
		funcComponent?: RecStrFuncComponent;
	}

	let {
		keys,
		data,
		cellClass = {},
		cellStyle = {},
		rowStart = 1,
		funcParsed,
		funcHtml,
		funcComponent
	}: Props = $props();

	type Dict = Record<string, any>;

	function getFieldVal(data: Record<string, any>, key: string): string {
		let result = '';
		const keys = key.split('.');
		let lastVal: any = data;
		for (let i = 0; i < keys.length; i++) {
			if (typeof lastVal[keys[i]] != undefined && lastVal[keys[i]] != null) {
				if (i == keys.length - 1) {
					return lastVal[keys[i]] as string;
				} else {
					lastVal = data[keys[i]];
				}
			}
		}
		return result;
	}
</script>

<tbody class="[&_td]:py-1.5 [&_td]:xl:py-2 [&_td]:xl:py-2.5 [&_td]:2xl:py-3 [&_td]:px-2 [&_td]:xl:px-3">
	{#each data as dataRow, rowIdx}
		<tr>
			{#each keys as key}
				<td
					class={typeof cellClass[key] != undefined ? cellClass[key] : ''}
					style={typeof cellStyle[key] != undefined ? cellStyle[key] : ''}
				>
					{#if funcParsed && funcParsed[key]}
						{funcParsed[key](dataRow, rowIdx)}
					{:else if funcHtml && funcHtml[key]}
						{@html funcHtml[key](dataRow, rowIdx)}
					{:else if funcComponent && funcComponent[key]}
						{@const myComponent = funcComponent[key](dataRow, rowIdx)}
						<myComponent.component data={myComponent.data} {...myComponent.props} />
					{:else}
						{key == '{idx}' ? rowStart + rowIdx : getFieldVal(dataRow, key)}
					{/if}
				</td>
			{/each}
		</tr>
	{/each}
</tbody>

<style>
	/* td {
		@apply ;
	} */
</style>