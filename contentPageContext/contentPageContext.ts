import type { ContentPageContext } from "@redneckz/wildless-cms-uni-blocks/lib/components/ContentPage/ContentPageContext";
import { useRouterHook } from "./useRouter";

export const contentPageContext: ContentPageContext = {
  useRouter: useRouterHook,
};
