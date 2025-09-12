<script lang="ts">
	import Pulse from 'svelte-loading-spinners/Pulse.svelte';

	export let text = 'Sedang memproses data...';
</script>

<div class="p-10 border border-slate-300 dark:border-slate-600 flex flex-col items-center">
	<div class="mb-4 text-center">
		<Pulse size="60" color="#66b0f5" unit="px"/>
	</div>
	<div autofocus>{text}</div>
</div>
