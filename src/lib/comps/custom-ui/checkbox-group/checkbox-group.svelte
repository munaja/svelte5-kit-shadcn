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
		wrapperDefaultClass = 'py-1.5 2xl:pt-1 gap-4 xl:gap-5 [&_label]:block [&_label]:flex [&_button]:size-5 [&_button]:xl:size-6 [&_button]:2xl:size-7 [&_button]:me-1.5 [&_.label-inside]:pt-0.5', 
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
			/>
			<div class="label-inside">
				{reference.label}
			</div>
		</label>
	{/each}
</div>
