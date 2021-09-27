import {Home, Timer} from "@mui/icons-material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";

export interface PageMeta {
  title: string;
  description?: string;
  Icon?: OverridableComponent<SvgIconTypeMap> & {muiName: string};
}

export type PageMetas = {[k: string]: PageMeta};

export const pageMetas: PageMetas = {
  "/404": {
    title: "Error"
  },
  "/": {
    title: "Home",
    Icon: Home
  },
  "/cooking/time": {
    title: "Cooking Time Calculator",
    description: "A simple calculator for your BDO cooking time",
    Icon: Timer
  }
};
