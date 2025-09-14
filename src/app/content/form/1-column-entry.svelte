<script lang="ts">
	// ---------- Imports ----------
	// libs
	import { Separator } from "lib/comps/shadcn-ui/separator";
	import PageNavCanSub from 'lib/comps/custom-ui/content-nav/can-sub.svelte';

	// apps
	import Entry from "app/comps/form/1-column-entry.svelte"; 

	// ---------- Functions ----------
	function cancel() {
		console.log('cancel is hit');
	}

	function submit() {
		console.log('submit is hit');
	}
</script>

<div class="text-sm xl:text-base font-semibold">
	Single Column
</div>
<Separator class="my-4 xl:my-5" />
<Entry />
<Separator class="my-4 xl:my-5" />
<PageNavCanSub onCancel={cancel} onSubmit={submit} />
