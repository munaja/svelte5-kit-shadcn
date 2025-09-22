<script lang="ts">
	// ---------- Imports ----------
	import * as DE from "lib/comps/custom-ui/doc-entry";
	import * as CB from "lib/comps/custom-ui/checkbox-group";
	import * as RB from "lib/comps/custom-ui/radio-group";
	import * as Input from "lib/comps/shadcn-ui/input";
	import * as Textarea from "lib/comps/shadcn-ui/textarea";

	// ---------- Declaration and Logics ----------
	const cbRefs = [
		'Item One',
		'Item 2',
		'Item 3',
	]
	let cbVals: string[] = [];
</script>

<DE.Root colCount={2}>
	<DE.Cell>
		<DE.Label>First Input </DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label position="dynamic">Second Input</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>Checkbox</DE.Label>
		<DE.Field>
			<CB.Root references={CB.arrayToItems(cbRefs)} value={cbVals} wrapperClass="flex" />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label position="dynamic">Just Input</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>Checkbox 2</DE.Label>
		<DE.Field>
			<CB.Root references={CB.arrayToItems(cbRefs)} value={cbVals} wrapperClass="flex" />
		</DE.Field>
	</DE.Cell>
	<DE.LineBreaker />
	<DE.Cell>
		<DE.Label>Some Input</DE.Label>
		<DE.Field>
			<RB.Root references={CB.arrayToItems(cbRefs)} value={cbVals} wrapperClass="flex" />
		</DE.Field>
	</DE.Cell>
	<DE.Cell colSpan={2}>
		<DE.Label>Textarea</DE.Label>
		<DE.Field>
			<Textarea.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
