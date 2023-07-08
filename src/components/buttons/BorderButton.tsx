import * as React from "react";
import { Button, useToken } from "@chakra-ui/react";

export interface BorderButtonProps extends React.PropsWithChildren {
  onClick: () => void;
  capitalize?: boolean;
}

export const BorderButton = (props: BorderButtonProps) => {
  const { onClick, capitalize = false } = props;

  const [c100, c200, c300, c400] = useToken("colors", [
    "p95.light.100",
    "p95.light.200",
    "p95.light.300",
    "p95.light.400",
  ]);

  return (
    <Button
      onClick={onClick}
      px="3"
      bg={c200}
      color={c400}
      borderLeft={`2px solid ${c100}`}
      borderTop={`2px solid ${c100}`}
      borderRight={`2px solid ${c400}`}
      borderBottom={`2px solid ${c400}`}
      boxShadow={`-2px -2px  ${c300} inset`}
      style={{ textTransform: capitalize ? "capitalize" : "none" }}
    >
      {props.children}
    </Button>
  );
};
