export function useFoo<T>(): (foo: T) => boolean {
	return useCallback((foo: T) => false, []);
}
