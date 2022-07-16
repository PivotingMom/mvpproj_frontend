import { h, Suspense } from "vue";

//<-- suspense is a feature that renders a fallback (in form of loading screen, icon,gif etc), while we wait our main component to fetch response from API.it's needed because the await function is not allowed because set up isn't an asynchronous function), but by wrapping the async function, error disappears. and by keeping it in separate file, helps to avoid code repetition  & omission-->
export function WrapAsyncComponent(component) {
  const wrapper = () =>
    h(Suspense, null, {
      default() {
        return h(component);
      },
      fallback() {
        return h("app-loading");  // <-- fallback placeholder (in form of loading screen, icon,gif etc)
      },
    });
  wrapper.displayName = "WrapAsyncComponent";
  return wrapper;
}