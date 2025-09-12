<script lang="ts">
	import * as DE from "@/comps/custom-ui/doc-entry";
	import * as Input from "lib/comps/shadcn-ui/input";
	import * as Textarea from "lib/comps/shadcn-ui/textarea";
</script>

<DE.Root cellFlex={false} colCount={3}>
	<DE.Cell>
		<DE.Label>First Input </DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>Second Input</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell>
		<DE.Label>Third Input</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
	<DE.Cell colSpan={3}>
		<DE.Label>Third Input</DE.Label>
		<DE.Field>
			<Textarea.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
