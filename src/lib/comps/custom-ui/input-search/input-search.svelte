<script lang="ts">
	// ---------- Imports
	import { Input } from "lib/comps/shadcn-ui/input";

	// ---------- Props
	interface Props {
		value: string;
		labelDefaultClass?: string;
		labelClass?: string;
		fieldDefaultClass?: string;
		fieldClass?: string;
		triggerOn?: 'enter-key-press' | 'typing';
		typingDelayDuration?: number;
	}
	let {
		value = $bindable(''),
		labelDefaultClass = 'font-semibold pt-2 me-5',
		labelClass = '',
		fieldDefaultClass = 'w-[60%] lg:w-[70%]',
		fieldClass = '',
		triggerOn = 'typing',
		typingDelayDuration
	}: Props = $props();

	function checkInput() {

	}

	function checkEnter() {
		if (triggerOn != 'enter-key-press') {
			return;
		}
	}
</script>

<div class="flex mb-4 xl:mb-5">
	<div class={`${labelDefaultClass} ${labelClass}`}>Search Component</div>
	<div class={`${fieldDefaultClass} ${fieldClass}`}>
		<Input bind:value onkeydown={checkEnter} oninput={checkInput} />
	</div>
</div>
