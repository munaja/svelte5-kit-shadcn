<script lang="ts">
	export let column: 1 | 2 | 3 = 1;
	export let density: 'default' | 'dense' = 'default';
	export let side: 'default' | 'break' = 'default';
	export let position: 'default' | 'dynamic' = 'default';

	let classValExt: string | undefined | null = '';
	export { classValExt as class };

	var classVal = '';
	if (column == 2) {
		classVal += 'column-2 ';
	} else if (column == 3) {
		classVal += 'column-3 ';
	} else {
		classVal = 'column-1 ';
	}

	if (density == 'dense') {
		classVal += 'density-dense ';
	}

	if (side == 'break') {
		classVal += 'side-break ';
	}

	if (position == 'dynamic') {
		classVal += 'position-dynamic ';
	}
</script>

<div class={`${(classVal + classValExt).trim()}`}> 
	<slot />
</div>

<!-- <style>
	.column-1,
	.column-1,
	.column-1 {
		@apply flex-shrink-0 w-full;
	}

	.column-1:not(.density-dense):not(:last-child),
	.column-2:not(.density-dense):not(:last-child),
	.column-3:not(.density-dense):not(:last-child) {
		@apply mb-3 md:mb-2.5 xl:mb-3;
	}

	.column-2:not(.position-dynamic),
	.column-3:not(.position-dynamic) {
		@apply pe-4;
	}

	.column-2:is(.position-dynamic),
	.column-3:is(.position-dynamic) {
		@apply ps-4;
	}

	/* form things */
	.column-1:not(.side-break),
	.column-2:not(.side-break),
	.column-3:not(.side-break) {
		@apply md:flex;
	}

	.column-2:not(.side-break) {
		@apply md:w-1/2;
	}

	.column-3:not(.side-break) {
		@apply md:w-1/3;
	}
</style> -->