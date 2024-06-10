/**
 * Same as Object.entries() but applies more specific typings; this is only safe
 * if we constructed/validated the object ourselves and know that the types
 * match the actual shape of the object
 */
export function objectEntries<T extends Record<string, unknown>>(
	object: T,
): [keyof T, T[keyof T]][] {
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return Object.entries(object) as [keyof T, T[keyof T]][];
}

/**
 * Same as Object.keys() but applies more specific typings; this is only safe
 * if we constructed/validated the object ourselves and know that the types
 * match the actual shape of the object
 */
export function objectKeys<T extends Record<string, unknown>>(
	object: T,
): (keyof T)[] {
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return Object.keys(object) as (keyof T)[];
}

/**
 * Same as Object.fromEntries() but applies more specific typings; this is only
 * safe if we constructed/validated the input entries ourselves and know that
 * the types match the actual shape of the object
 */
export function objectFromEntries<Key extends string | number | symbol, Value>(
	entries: (readonly [Key, Value])[],
): Partial<Record<Key, Value>> {
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return Object.fromEntries(entries) as Partial<Record<Key, Value>>;
}

export type AddObjectValues<Input, ToAdd> = {
	[Key in keyof Input]: Input[Key] | ToAdd;
};
