<script lang="ts">
	// ---------- Imports ----------
	// libs
	import * as DE from "@/comps/custom-ui/doc-entry";
	import * as Input from "lib/comps/shadcn-ui/input";
</script>

<div class="mb-2">
	The sample uses several blocks due to block's nature that provide label's width
</div>

<DE.Root labelSize="thin" class="!mb-2.5 xl:!mb-3 !pt-0"> 
	<DE.Cell>
		<DE.Label height="compact">Thin Width</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
<DE.Root labelSize="narrow" class="!mb-2.5 xl:!mb-3 !pt-0">
	<DE.Cell >
		<DE.Label height="compact">Narrow Width</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
<DE.Root labelSize="medium" class="!mb-2.5 xl:!mb-3 !pt-0">
	<DE.Cell>
		<DE.Label>Medium Width</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
<DE.Root labelSize="wide" class="!mb-2.5 xl:!mb-3 !pt-0">
	<DE.Cell>
		<DE.Label>Wide Width</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
<DE.Root labelSize="extra-wide" class="!pt-0">
	<DE.Cell>
		<DE.Label>Extra Wide Width</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
<DE.Root labelSize="extra-wide" class="!pt-0">
	<DE.Cell>
		<DE.Label class="!w-80 !pt-0.5">
			Custom width is applied into label directly via class value, ignores parent's rule</DE.Label>
		<DE.Field>
			<Input.Root />
		</DE.Field>
	</DE.Cell>
</DE.Root>
