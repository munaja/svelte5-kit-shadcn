import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		usesFrame: true,
		containerSize: 'xl',
	};
};
