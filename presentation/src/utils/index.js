export const propComponentOrFn = (prop)  => typeof prop === 'function' ? prop() : prop