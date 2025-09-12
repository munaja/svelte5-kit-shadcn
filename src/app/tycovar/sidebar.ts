import type { SidebarGroup } from "lib/comps/custom-ui/main-nav/tycovar";

export function genProjectSidebarItems(): SidebarGroup[] {
	return [
		{
			items: [
				{
					title: 'Dasboard', 
					url: `/`,
					icon: 'bi bi-house',
				},
			],
		},
		{
			title: 'Content',
			items: [
				{
					title: 'Full Width + Nav', 
					url: `/content/full-width`,
					icon: 'bi bi-fullscreen',
				},
				{
					title: 'Sized Width',
					url: `/content/sized-width`,
					icon: 'bi bi-fullscreen-exit',
				},
			]
		},
		{
			title: 'Form',
			items: [
				{
					title: '1 Column',
					url: `/form/1-column`,
					icon: 'bi bi-ui-checks',
				},
				{
					title: '2 Columns',
					url: `/form/2-columns`,
					icon: 'bi bi-ui-checks',
				},
				{
					title: '3 Columns',
					url: `/form/3-columns`,
					icon: 'bi bi-ui-checks',
				},
				{
					title: '4 Columns',
					url: `/form/4-columns`,
					icon: 'bi bi-ui-checks',
				},

			]
		},
	]
};
