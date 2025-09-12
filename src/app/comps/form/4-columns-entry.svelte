<script lang="ts">
	import * as DE from "@/comps/custom-ui/doc-entry";
	import * as Select from "@/comps/custom-ui/select";
	import * as ComboBox from "@/comps/custom-ui/combobox";
	import * as Textarea from "lib/comps/shadcn-ui/textarea";

	let select1Val = $state('');
	let select1Item: Select.Item | undefined = $state();

	let select2Val: number[] = $state([]);
	let select2Items: Select.Item[] | undefined = $state();

	let comboBox1Val = $state('');
	let comboBox1Item: ComboBox.Item | undefined = $state();

	let comboBox2Val = $state([]);
	let comboBox2Items: ComboBox.Item[] | undefined = $state();

	const selectOptios = [
		'The First Item',
		'The Second Item',
		'Another Item',
		'And Another Item',
		'The Last Item'
	]
</script>

<DE.Root cellFlex={false} colCount={4} >
	<DE.Cell>
		<DE.Label class="test">Select</DE.Label>
		<DE.Field>
			<Select.Root bind:value={select1Val} bind:selectedItem={select1Item} options={Select.arrayToItems(selectOptios)} />
			{#if select1Val}
				<div class="pt-1.5">
					{select1Val}
					{#if select1Item?.value}
						&lbrace;
						{select1Item.label}
						{select1Item.value}
						&rbrace;
					{/if}
				</div>
			{/if}
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>Select Idx Array, Multiple</DE.Label>
		<DE.Field>
			<Select.Root bind:value={select2Val} bind:selectedItem={select2Items} multiple={true} options={Select.arrayToIndexedItems(selectOptios)} />
			{#if select2Val.length > 0}
				<div class="pt-1.5">
					{select2Val}
					{#if select2Items && select2Items.length > 0}
						&lbrace;
						{#each select2Items as item, idx}
							{item.value}
							{item.label}
							{@html idx < select2Items.length - 1 ? ',&nbsp' : ''}
						{/each}
						&rbrace;
					{/if}
				</div>
			{/if}
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>ComboBox</DE.Label>
		<DE.Field>
			<ComboBox.Root
				options={ComboBox.arrayToItems(selectOptios)}
				bind:value={comboBox1Val}
				bind:selectedItem={comboBox1Item}
				elmWidthClass={`w-full`}
			/>
			{#if comboBox1Val}
			<div class="pt-1.5">
				{comboBox1Val}
				{#if comboBox1Item?.value}
					&lbrace;
					{comboBox1Item.label}
					{comboBox1Item.value}
					&rbrace;
				{/if}
			</div>
			{/if}
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>ComboBox Idx Array, Multiple</DE.Label>
		<DE.Field>
			<ComboBox.Root
				options={ComboBox.arrayToIndexedItems(selectOptios)}
				bind:value={comboBox2Val}
				bind:selectedItem={comboBox2Items}
				visibleCount={2}
				elmWidthClass={`w-full`}
				multiple={true}
			/>
			{#if comboBox2Val.length > 0}
				<div class="pt-1.5">
					{comboBox2Val}
					{#if comboBox2Items && comboBox2Items.length > 0}
						&lbrace;
						{#each comboBox2Items as item, idx}
							{item.value}
							{item.label}
							{@html idx < comboBox2Items.length - 1 ? ',&nbsp' : ''}
						{/each}
						&rbrace;
					{/if}
				</div>
			{/if}
		</DE.Field>
	</DE.Cell>
	<DE.Cell colSpan={4}>
		<DE.Label>Textarea</DE.Label>
		<DE.Field>
			<Textarea.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
