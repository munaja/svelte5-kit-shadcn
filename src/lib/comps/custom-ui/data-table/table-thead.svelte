<script lang="ts">
	import type { RecStrStr } from '@/types/record';
	import { type Th } from './types';

	interface Props {
		data: Th[][];
		keys: string[];
		cellClass?: RecStrStr;
		cellStyle?: RecStrStr;
	}

	let {
		data,
		keys,
		cellClass = {},
		cellStyle = {}
	}: Props = $props();
</script>

<thead class="">
	{#each data as tr}
		<tr>
			{#each tr as { label, colSpan, rowSpan, classVal, style } , idx}
				<th
					colspan={colSpan}
					rowspan={rowSpan}
					class={cellClass[keys[idx]] ? cellClass[keys[idx]] : 'py-1 xl:py-2 px-2 font-semibold text-start ' + classVal}
					style={cellStyle[keys[idx]] ? cellStyle[keys[idx]] : style}
				>
					{label}
				</th>
			{/each}
		</tr>
	{/each}
</thead>