import {Home, Timeline, Timer} from "@mui/icons-material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";

export interface PageMeta {
  title: string;
  description?: string;
  Icon?: OverridableComponent<SvgIconTypeMap> & {muiName: string};
}

export type PageMetas = {[k in PagePath]: PageMeta};

export type PagePath = "/404" | "/" | "/brackets" | "/cooking/time";

export const pageMetas: PageMetas = {
  "/404": {
    title: "Error"
  },
  "/": {
    title: "Home",
    description: "Welcome to BDO Ninja!",
    Icon: Home
  },
  "/brackets": {
    title: "AP/DP Brackets",
    description: "View additional AP/DR at certain intervals",
    Icon: Timeline
  },
  "/cooking/time": {
    title: "Cooking Time Calculator",
    description: "A simple calculator for your BDO cooking time",
    Icon: Timer
  }
};
