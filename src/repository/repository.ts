export interface Repository<T> {
	get(id: number): Promise<T>;

	getAll(): Promise<T[]>;

	add(item: T): Promise<void>;
}
