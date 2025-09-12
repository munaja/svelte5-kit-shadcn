<script lang="ts">
	// ---------- Imports ----------
	// lib
	import Separator from 'lib/comps/shadcn-ui/separator/separator.svelte';

	// apps
	import Detail from 'app/comps/content/detail.svelte';
	import ContentNav from 'lib/comps/custom-ui/content-nav/bac-edi.svelte';

	// ---------- Functions ----------
	function back() {
		console.log('back is hit');
	}

	function edit() {
		console.log('edit is hit');
	}
</script>

<div class="mb-4 xl:mb-5 font-semibold text-lg xl:text-xl">
	Without Nav, Manual Header
</div>
<Separator class="my-5" />
<Detail />
<Separator class="my-5" />
<ContentNav onBack={back} onEdit={edit} />
