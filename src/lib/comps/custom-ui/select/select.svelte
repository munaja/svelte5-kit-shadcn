<script lang="ts">
	import * as Select from "lib/comps/shadcn-ui/select/index";
	import type { Item, Items } from ".";

	interface Props {
		options?: Items;
		selectedItem?: Item | Item[];
		value?: any | any[];
		placeholder?: string;
		multiple?: boolean;
		// [key: string]: any;
	};
	let {
		options,
		selectedItem = $bindable(),
		value = $bindable(),
		placeholder = '.. select item ..',
		multiple = false,
		// ...restProps
	}: Props = $props();

	if (!value) {
		value = multiple ? [] : '';
	}

	$effect(() => {
		if (multiple) {
			// For multiple selection, find all selected items
			if (Array.isArray(value)) {
				selectedItem = options?.filter(option => value.includes(option.value)) || [];
			}
		} else {
			// For single selection
			selectedItem = options?.find(option => option.value === value) || { label: '', value: '' };
		}
	});

	// Helper function to get display text for trigger
	function displayLabel(): string {
		if (multiple && Array.isArray(selectedItem) && selectedItem.length > 0) {
			if (selectedItem.length === 1) {
				return selectedItem[0].label;
			} else {
				return `${selectedItem.length} items selected`;
			}
		} else if (!multiple && selectedItem && typeof selectedItem === 'object' && 'label' in selectedItem && selectedItem.label) {
			return selectedItem.label;
		}
		return placeholder;
	}
</script>

<Select.Root type={multiple ? "multiple" : "single"} bind:value={value} >
	<Select.Trigger class="w-full">
		{displayLabel()}
	</Select.Trigger>
	<Select.Content>
		{#if options}
			{#each options as option}
				<Select.Item value={option.value}>{option.label}</Select.Item>
			{/each}
		{/if}
	</Select.Content>
</Select.Root>
