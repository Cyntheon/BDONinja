import {pageMetas, PageMetas} from "app/page/pageMetas";

interface AppMeta {
  title: string;
  author: string;
  description: string;
  baseUrl?: string;
  pageMetas: PageMetas;
}

export const appMeta: AppMeta = {
  title: "BDO Ninja",
  author: "Cyntheon",
  description: "Helpful tools for Black Desert",
  pageMetas
};
