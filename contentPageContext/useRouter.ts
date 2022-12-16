import { Router } from "@redneckz/wildless-cms-uni-blocks/lib/components/ContentPage/ContentPageContext";

export const useRouterHook = (): Router => {
  const router = useRouter();
  const route = useRoute();

  return {
    pathname: route.path,
    query: route.query,
    push: router.push,
    href: globalThis.location?.href,
    replace: router.replace,
  };
};
