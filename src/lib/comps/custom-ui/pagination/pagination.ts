export interface LinkData {
	page_number: number;
	path: string;
}

export interface Pagination {
	path: string;
	number: number;
	numberKey: string;
	size: number;
	sizeKey: string;
	recordTotalCount: number;
	shownLinkCount: number;
}

export function genPagination(path: string = '/'): Pagination {
	return {
		path: path,
		number: 1,
		numberKey: 'page',
		size: 10,
		sizeKey: 'page-size',
		recordTotalCount: 0,
		shownLinkCount: 10,
	};
}

export function parsePagination(input: any): Pagination {
	return {
		path: input?.path || defaultValue.path,
		number: input?.number || defaultValue.number,
		numberKey: input?.numberKey || defaultValue.numberKey,
		size: input?.size || defaultValue.size,
		sizeKey: input?.sizeKey || defaultValue.sizeKey,
		recordTotalCount: input?.recordTotalCount || defaultValue.recordTotalCount,
		shownLinkCount: input?.shownLinkCount || defaultValue.shownLinkCount
	};
}

export const defaultValue: Pagination = {
	path: '/',
	number: 1,
	numberKey: 'page',
	size: 10,
	sizeKey: 'page-size',
	recordTotalCount: 0,
	shownLinkCount: 10
}
