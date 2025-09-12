<script lang="ts">
	import { type Col } from './types';

	interface Props {
		data: Col[];
	}

	let { data }: Props = $props();
</script>

<colgroup>
	{#each data as { span, classVal, style, width }, idx}
		<col class={classVal ? classVal : ''} style="{style ? style + '; ' : ''} {width ? `width:${width}px` : ''}" />
	{/each}
</colgroup>
