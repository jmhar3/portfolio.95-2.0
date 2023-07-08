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
      top="3"
      left="3"
      zIndex={1}
      spacing="2"
      align="center"
      w="fit-content"
      position="fixed"
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
      color="p95.100"
      w="100%"
      border="dashed 2px"
      borderColor="transparent"
      _hover={{ textDecoration: "none", borderColor: "p95.100" }}
    >
      <Stack align="center" spacing="1">
        <Image src={image} w="39px" />
        <Text>{label}</Text>
      </Stack>
    </Link>
  );
};
