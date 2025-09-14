<script lang="ts">	
	// ---------- Imports ----------
	// lib
	import { Separator } from 'lib/comps/shadcn-ui/separator';
	import PageNavCanSub from 'lib/comps/custom-ui/content-nav/can-sub.svelte';

	// apps 
	import Content from 'app/comps/form/4-columns-entry.svelte';

	// ---------- Functions ----------
	function cancel() {
		console.log('cancel is hit');
	}

	function submit() {
		console.log('submit is hit');
	}
</script>

<div class="text-sm xl:text-base font-semibold">
	4 Columns, Label Alwasy On Top, Sample of Select
</div>
<Separator class="my-4 xl:my-5" />
<Content />
<Separator class="my-4 xl:my-5" />
<PageNavCanSub onCancel={cancel} onSubmit={submit} />
