import * as React from "react";
import { Stack, Image, Link, Text } from "@chakra-ui/react";

import notebook from "../images/notebook.png";
import mail from "../images/email.png";
import computer from "../images/computer.png";

export interface LinkProps {
  link: string;
  label: string;
  image: string;
}

export const Links = () => {
  return (
    <Stack
      spacing="2"
      align="center"
      position="fixed"
      top="3"
      left="3"
      w="fit-content"
    >
      <LinkComponent
        link="https://github.com/jmhar3"
        label="GitHub"
        image={computer}
      />
      <LinkComponent
        link="https://medium.com/@jmhar"
        label="Blog"
        image={notebook}
      />
      <LinkComponent
        link="mailto:jmhar@protonmail.com"
        label="E-Mail"
        image={mail}
      />
    </Stack>
  );
};

export const LinkComponent = (props: LinkProps) => {
  const { link, label, image } = props;

  return (
    <Link
      p="2"
      pb="1"
      isExternal
      href={link}
      w="fit-content"
      border="dashed 2px"
      borderColor="transparent"
      _hover={{ textDecoration: "none", borderColor: "purple" }}
    >
      <Stack align="center" spacing="1">
        <Image src={image} w="39px" />
        <Text>{label}</Text>
      </Stack>
    </Link>
  );
};
