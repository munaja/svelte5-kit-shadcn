<script lang="ts">
	// externals
	// import Sun from "lucide-svelte/icons/sun";
	// import Moon from "lucide-svelte/icons/moon";
	import { toggleMode } from "mode-watcher";

	// libs
	import { Button } from "lib/comps/shadcn-ui/button/index.js";
</script>

<Button onclick={toggleMode} variant="outline" size="icon" class="w-6 h-6 xl:w-7 xl:h-7 pt-1 xl:!pt-0">
	<i class="bi bi-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></i>
	<i class="bi bi-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></i>
	<span class="sr-only">Toggle theme</span>
</Button>
