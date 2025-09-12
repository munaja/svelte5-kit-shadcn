<script lang="ts">
	import * as DE from "@/comps/custom-ui/doc-entry";
	import * as Input from "lib/comps/shadcn-ui/input";
	import * as Textarea from "lib/comps/shadcn-ui/textarea";
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
	<DE.Cell colSpan={2}>
		<DE.Label>Textarea</DE.Label>
		<DE.Field>
			<Textarea.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
