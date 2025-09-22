<script lang="ts">
	// import { Label } from "lib/comps/shadcn-ui/label/index.js"; 
	import * as RadioGroup from "lib/comps/shadcn-ui/radio-group/index.js"; 
	import type { Items } from ".";

	// ---------- Props
	interface Props {
		optionIdPrefix?: string;
		value?: any;
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
		optionIdPrefix = 'option-',
		value = $bindable(),
		references = $bindable([]),
		wrapperDefaultClass = 'py-1.5 2xl:pt-1 gap-4 xl:gap-5 [&_label]:block [&_label]:flex [&_button]:size-5 [&_button]:xl:size-6 [&_button]:2xl:size-7 [&_.label-inside]:pt-0.5',
		wrapperClass = '',
		labelDefaultClass = '',
		labelClass = '',
		onChange = () => {},
	}: Props = $props();
</script>

<RadioGroup.Root value={value} class={`${wrapperDefaultClass} ${wrapperClass}`} onchange={onChange}>
	{#each references as reference (reference.value)}
		<label class={`${labelDefaultClass} ${labelClass}`}>
			<RadioGroup.Item value={reference.value} id={`${optionIdPrefix}${reference.value}`} class="me-1.5" />
			<div class="label-inside">
				{reference.label}
			</div>
		</label>
	{/each}
</RadioGroup.Root>
