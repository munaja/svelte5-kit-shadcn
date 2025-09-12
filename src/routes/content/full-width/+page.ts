import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		usesFrame: true,
		containerSize: '',
		cotentTitle: 'Non Full Content',
		header: {
			title: 'Full Width',
			icon: 'bi bi-fullscreen',
			nav: [
				{
					type: 'input',
					label: 'Search',
					id: 'frame-nav-search',
				},
				{
					type: 'button',
					label: 'Add Relation',
					id: 'frame-nav-add',
				}
			],
		},
	};
};
