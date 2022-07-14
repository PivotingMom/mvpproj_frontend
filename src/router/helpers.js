import { h, Suspense } from "vue";

export function suspenseHack(component) {
  const wrapper = () =>
    h(Suspense, null, {
      default() {
        return h(component);
      },
      fallback() {
        return h("app-loading");  // <-- REPLACE THIS WITH YOUR OWN FALLBACK
      },
    });
  wrapper.displayName = "SuspenseHack";
  return wrapper;
}