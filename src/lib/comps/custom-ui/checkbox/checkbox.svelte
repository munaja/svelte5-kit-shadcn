<script lang="ts">
	// ---------- Imports
    import { Checkbox } from "lib/comps/shadcn-ui/checkbox";
	import type { Items } from ".";

	// ---------- Props
	interface Props {
		value: any[];
		references: Items;
		wrapperDefaultClass?: string;
		wrapperClass?: string;
		labelDefaultClass?: string;
		labelClass?: string;
		fieldDefaultClass?: string;
		fieldClass?: string;
		onChange?: () => void;
	}
	let {
		value = $bindable([]),
		references = $bindable([]),
		wrapperDefaultClass = 'pt-2 pb-2 [&_label]:block [&_label]:flex [&_label]:me-5 [&_label:not(:last-child)]:mb-2 [&_button]:xl:size-5',
		wrapperClass = '',
		labelDefaultClass = '',
		labelClass = '',
		onChange = () => {},
	}: Props = $props();

	function addItem(code: any) {
		value = [...value, code];
		onChange();
	}
	
	function removeItem(code: any) {
		value = value.filter((i) => i !== code);
		onChange();
	}

</script>

<div class={`${wrapperDefaultClass} ${wrapperClass}`}>
	{#each references as reference (reference.value)}
		{@const checked = value.includes(reference.value)}
			<label class={`${labelDefaultClass} ${labelClass}`}>
				<Checkbox
					{checked}
					value={reference.value}
					onCheckedChange={(v) => {
						if (v) {
							addItem(reference.value);
						} else {
							removeItem(reference.value);
						}
					}}
					class="me-2"
				/>
				<div>
					{reference.label}
				</div>
			</label>
	{/each}
</div>
