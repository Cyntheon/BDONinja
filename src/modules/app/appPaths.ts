import {Home, Timer} from "@material-ui/icons";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";

interface PageMeta {
  title: string;
  description?: string;
  heading?: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
}

export const pageMetas: {[k: string]: PageMeta} = {
  "/404": {
    title: "Error"
  },
  "/": {
    title: "Home",
    heading: "Welcome to BDO Ninja!",
    Icon: Home
  },
  "/cooking/time": {
    title: "Cooking Time Calculator",
    description: "A simple calculator for your BDO cooking time",
    Icon: Timer
  }
};

export const getPageMeta = (path: keyof typeof pageMetas) => {
  const {title, description, heading} = pageMetas[path];

  return () => ({
    props: {
      __META: {
        path,
        title: title || null,
        description: description || null,
        heading: heading || null
      }
    }
  });
};
