import {CardMedia} from "@material-ui/core";
import React, {useEffect, useLayoutEffect} from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
}

const NavCardBanner = ({title, image}: Props) => {
  useEffect(() => {
    console.log("Effect fire!");
  }, []);

  useLayoutEffect(() => {
    console.log("Layout Effect fire!");
  }, []);

  return (
    <CardMedia>
      <Image
        src={image}
        height={288}
        width={512}
        title={title}
        alt=""
        placeholder="blur"
      />
    </CardMedia>
  );
};

export default NavCardBanner;
