import { setupHooks } from "@redneckz/uni-jsx/lib/hooks/index";
import * as Hooks from "@redneckz/uni-jsx/lib/hooks/vue/index";
import { setup } from "@redneckz/uni-jsx/lib/setup";
import { h } from "vue";

setup((type: any, rawProps: any = {}) => {
  const { children, dangerouslySetInnerHTML, ...rest } = rawProps;

  let normalizedChildren = children;

  const props = Object.assign(
    {},
    rest,
    dangerouslySetInnerHTML ? { innerHTML: dangerouslySetInnerHTML.__html } : {}
  );

  const isComponent = typeof type !== "string";
  const lazyChildren =
    isComponent && typeof normalizedChildren !== "function"
      ? () => normalizedChildren
      : normalizedChildren; // Vue optimization

  return h(type, props, lazyChildren);
});

setupHooks(Hooks);
