import { ContentPage } from "@redneckz/wildless-cms-uni-blocks";
import { contentPageContext } from "~~/contentPageContext/contentPageContext";
import { Blocks } from "@redneckz/wildless-cms-uni-blocks/lib/components/Blocks";

export default defineComponent({
  setup() {
    const { data } = useLazyAsyncData(
      "blog",
      () => import("../content/ContentPage.page.json")
    );
    return () =>
      data.value ? (
        <ContentPage
          data={data.value as any}
          context={contentPageContext}
          blocksRegistry={Blocks}
        />
      ) : null;
  },
});
