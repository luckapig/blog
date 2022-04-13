const entry = process.server ? (ctx) => import("#app/bootstrap").then((m) => m.default(ctx)) : () => import("#app/bootstrap").then((m) => m.default);
if (process.client) {
  entry();
}
export default entry;
