import Vue from "vue";
import { SidebarHeader, groupSidebarHeaders } from "@theme/util/sidebar";
import { isActive } from "@theme/util/path";

import type { CreateElement, VNode } from "vue";
import type { Route } from "vue-router";

interface AnchorItem {
  link: string;
  text: string;
  active: boolean;
}

const renderLink = (
  h: CreateElement,
  { text, link, active }: AnchorItem
): VNode =>
  h(
    "RouterLink",
    {
      props: {
        to: link,
        activeClass: "",
        exactActiveClass: "",
      },
      class: {
        active,
        "anchor-link": true,
      },
    },
    [h("div", {}, [text])]
  );

interface RenderChildrenOptions {
  children: SidebarHeader[] | false;
  path: string;
  route: Route;
  depth?: number;
  maxDepth: number;
}

const renderChildren = (
  h: CreateElement,
  { children, path, route, maxDepth, depth = 2 }: RenderChildrenOptions
): VNode | null => {
  if (!children || depth > maxDepth) return null;

  return h(
    "ul",
    { class: "anchor-list" },
    children.map((child: SidebarHeader) => {
      const active = isActive(route, `${path}#${child.slug}`);

      return h("li", { class: ["anchor", `anchor${depth}`] }, [
        renderLink(h, {
          text: child.title,
          link: `${path}#${child.slug}`,
          active,
        }),
        renderChildren(h, {
          children: child.children || false,
          path,
          route,
          maxDepth,
          depth: depth + 1,
        }),
      ]);
    })
  );
};

export default Vue.extend({
  name: "Anchor",

  functional: true,

  render(h, { parent: { $page, $route, $themeConfig, $themeLocaleConfig } }) {
    const maxDepth =
      ($page.frontmatter.sidebarDepth ||
        ($themeLocaleConfig.sidebarDepth as number | undefined) ||
        $themeConfig.sidebarDepth ||
        2) + 1;
    const children = groupSidebarHeaders($page.headers || []);

    return h("div", { attrs: { class: "anchor-place-holder" } }, [
      h("aside", { attrs: { id: "anchor" } }, [
        h("div", { class: "anchor-wrapper" }, [
          renderChildren(h, {
            children,
            path: $route.path,
            route: $route,
            maxDepth,
          }),
        ]),
      ]),
    ]);
  },
});
