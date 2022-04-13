import { Nuxt } from '@nuxt/schema';

declare function bundle(nuxt: Nuxt): Promise<unknown[]>;

export { bundle };
