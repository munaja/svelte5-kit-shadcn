export type SidebarItem = {
	title: string;
	url: string;
	icon?: string; // uses bootstrap icon
	isActive?: boolean;
	items?: SidebarItem[];
	itemsMode?: 'sub' | 'dropdown'; 
}

export type SidebarGroup = {
	title?: string;
	items: SidebarItem[];
}
