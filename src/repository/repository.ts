export interface Repository<T> {
	get(id: number): T;

	getAll(): T[];

	add(item: T): void;
}
