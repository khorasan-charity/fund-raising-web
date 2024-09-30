export interface IPaginatedResult<T> {
	totalCount: number;
	items: T[];
}
