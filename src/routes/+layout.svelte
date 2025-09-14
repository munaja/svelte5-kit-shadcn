<script lang="ts">
	// ---------- Imports
	// sveltes
	import { page } from '$app/state';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// externals
	import { ModeWatcher } from "mode-watcher";

	// libs
	import * as Sidebar from "lib/comps/shadcn-ui/sidebar";
	import * as Breadcrumb from "lib/comps/shadcn-ui/breadcrumb";
	import { Separator } from "lib/comps/shadcn-ui/separator";

	// apps
	import 'app/styles/base.css';
	import { genProjectSidebarItems } from 'app/tycovar/sidebar'; 
	import AppSidebar from "lib/comps/custom-ui/main-nav/sidebar.svelte";
	import ModeSwitcher from "lib/comps/custom-ui/main-nav/mode-switcher.svelte";
	import PageContentFrame from "lib/comps/custom-ui/page-content-frame/frame.svelte";

	// ---------- Props (Legacy: Exports)
	let { children } = $props();
	// let pd = $state(page.data);
	// let x = page.data;

	// ---------- Declaration and Logics ----------
	// framed header - focus marker
	let headerNavFocusId = writable(0);
	setContext('headerNavFocusId', headerNavFocusId);

	// framed header - button click
	let headerButtonClick = writable('');
	setContext('headerButtonClick', headerButtonClick);

	// framed header input 
	let headerInputValues = writable<any[]>([]);
	setContext('headerInputValues', headerInputValues);

	// checkFrame(page.data);
	$effect(() => {
		checkFrame(page.data);
	});

	// ---------- Functions ----------
	function checkFrame(pd: App.PageData & Record<string, any>) {
		if(!pd.usesFrame) { 
			pd.usesFrame = true;
		}
	}
</script>

<ModeWatcher />

<Sidebar.Provider>
	<AppSidebar data={genProjectSidebarItems()} /> 
	<Sidebar.Inset>
		<header
			class="bg-slate-50 dark:bg-slate-900 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear px-4 xl:px-5"
		>
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<Breadcrumb.Root class="grow">
				<Breadcrumb.List>
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block" />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
				</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<div>
				<ModeSwitcher />
			</div>
	  </header>
	  {#if page.data.usesFrame}
	  <PageContentFrame
		  size={page.data.containerSize}
		  wrapperClass={page.data.containerWrapperClass}
		  innerClass={page.data.containerInnerClass}
		  header={page.data.header}
	  >
		  {@render children?.()}			
	  </PageContentFrame>
	  {:else}
	  	<div class="p4 xl:p-5 ">
			{@render children?.()}			
		</div>
	  {/if}
  </Sidebar.Inset>
</Sidebar.Provider>

