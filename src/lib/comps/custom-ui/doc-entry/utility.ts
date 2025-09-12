export type BreakPoint = '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const breakPoints: BreakPoint[] = ['', 'sm', 'md', 'lg', 'xl', '2xl'];
export function getBreakpointIdx(input: BreakPoint): number {
	return breakPoints.indexOf(input);
}

export type LabelSize = 'thin' | 'narrow' | 'medium' | 'wide' | 'extra-wide';
export const labelSizes: LabelSize[] = ['thin', 'narrow', 'medium', 'wide', 'extra-wide'];
export function getLabelSizeIdx(input: LabelSize): number {
	return labelSizes.indexOf(input);
}
