<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import XIcon from "@lucide/svelte/icons/x";
	import { tick } from "svelte";
	import * as Command from "lib/comps/shadcn-ui/command";
	import * as Popover from "lib/comps/shadcn-ui/popover";
	import { Button } from "lib/comps/shadcn-ui/button/index.js";
	import { Badge } from "lib/comps/shadcn-ui/badge/index.js";
	import { cn } from "@/scripts/utils";
	import type { Item, Items } from "./index";

	interface Props {
		options: Items;
		value?: string | string[];
		selectedItem?: Item | Item[];
		placeholder?: string;
		multiple?: boolean;
		visibleCount?: number;
		searchPlaceholder?: string;
		emptyText?: string;
		elmWidthClass?: string;
		class?: string;
	};

	let {
		options,
		value = $bindable(),
		selectedItem = $bindable(),
		multiple = false,
		visibleCount = 3,
		placeholder = ".. select item ..",
		searchPlaceholder = "search...",
		emptyText = "No item found.",
		elmWidthClass = 'w-[200px]',
		class: className = "",
	}: Props = $props();

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	let commandStyle = $state({ width: '200px' })

	// Initialize values based on multiple selection
	if (!value) {
		value = multiple ? [] : "";
	}

	// Update trigger width when component mounts or trigger changes
	$effect(() => {
		if (triggerRef) {
			commandStyle = { width: triggerRef.offsetWidth + 'px' };
		}
		// if (popoverRef) {
		// 	popoverWidth = popoverRef.offsetWidth;
		// }
	});

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

	// Update selectedItem when value changes
	$effect(() => {
		if (multiple && Array.isArray(value)) {
			selectedItem = options.filter(item => value?.includes(item.value) ?? false);
		} else if (!multiple && typeof value === 'string') {
			selectedItem = options.find(item => item.value === value) || undefined;
		}
	});

	// Handle item selection
	function handleSelect(item: Item) {
		if (multiple && Array.isArray(value)) {
			const currentValues = [...value];
			const index = currentValues.indexOf(item.value);
			
			if (index > -1) {
				// Remove if already selected
				currentValues.splice(index, 1);
			} else {
				// Add if not selected
				currentValues.push(item.value);
			}
			
			value = currentValues;
		} else {
			value = item.value;
			closeAndFocusTrigger();
		}
	}

	// Remove item from selection (for multiple mode)
	function removeItem(itemValue: string, event: Event) {
		event.stopPropagation();
		if (multiple && Array.isArray(value)) {
			value = value.filter(v => v !== itemValue);
		}
	}

	// Check if item is selected
	function isSelected(item: Item): boolean {
		if (multiple && Array.isArray(value)) {
			return value.includes(item.value);
		} else {
			return value === item.value;
		}
	}

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			// triggerRef.focus();
		});
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				class={cn(elmWidthClass, 'justify-between', className)}
				role="combobox"
				aria-expanded={open}
				bind:ref={triggerRef}
			>
				<div class="flex flex-wrap gap-1 flex-1 min-w-0">
					{#if multiple && Array.isArray(selectedItem) && selectedItem.length > 0}
						{#if selectedItem.length <= visibleCount}
							{#each selectedItem as item}
								<Badge variant="secondary" class="text-xs">
									{item.label}
									<button
										type="button"
										class="ml-1 hover:bg-muted-foreground/20 rounded-sm !h-7 xl:!h-8"
										onclick={(e) => removeItem(item.value, e)}
									>
										<XIcon class="h-3 w-3" />
									</button>
								</Badge>
							{/each}
						{:else}
							<span class="text-sm">{selectedItem.length} items selected</span>
						{/if}
					{:else}
						<span class="truncate">{displayLabel()}</span>
					{/if}
				</div>
				<ChevronsUpDownIcon class="opacity-50 ml-2 h-4 w-4 shrink-0" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class={`${elmWidthClass} p-0`}>
		<Command.Root style={commandStyle}>
			<Command.Input placeholder={searchPlaceholder} />
			<Command.List>
				<Command.Empty>{emptyText}</Command.Empty>
				<Command.Group>
					{#each options as item (item.value)}
						<Command.Item
							value={String(item.value)}
							onSelect={() => handleSelect(item)}
						>
							<CheckIcon
								class={cn(
									"mr-2 h-4 w-4",
									!isSelected(item) && "text-transparent"
								)}
							/>
							{#if item.icon}
								<i class={cn("mr-2", item.icon)}></i>
							{/if}
							{item.label}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
