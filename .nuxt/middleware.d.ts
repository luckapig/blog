import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module '/home/runner/blog/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}