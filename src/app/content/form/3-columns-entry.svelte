<script lang="ts">	
	// ---------- Imports ----------
	// lib
	import { Separator } from 'lib/comps/shadcn-ui/separator';
	import PageNavCanSub from 'lib/comps/custom-ui/content-nav/can-sub.svelte';

	// apps 
	import Content from 'app/comps/form/3-columns-entry.svelte';

	// ---------- Functions ----------
	function cancel() {
		console.log('cancel is hit');
	}

	function submit() {
		console.log('submit is hit');
	}
</script>

<div class="mb-2 text-sm xl:text-base font-semibold">
	3 Columns, Label Alwasy On Top
</div>
<Separator class="my-5" />
<Content />
<Separator class="my-5" />
<PageNavCanSub onCancel={cancel} onSubmit={submit} />
