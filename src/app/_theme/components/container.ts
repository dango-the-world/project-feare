import { ComponentStyle } from "@yamada-ui/react";

export const Container: ComponentStyle = {
  // すべての場合に設定されるスタイル
  baseStyle: {
    bg: "green.100",
  },
  //size="sm"とかsize="md"のようにしたときに設定されるスタイル
  sizes: {
    sm: { p: "sm", fontSize: "sm" },
    md: { p: "md", fontSize: "md" },
    lg: { p: "lg", fontSize: "lg" },
  },
  // variant="with-border-dotted"のようにしたときに設定されるスタイル
  variants: {
    "wtih-border-solid": {
      borderWidth: "1px",
    },
    "wtih-border-dotted": {
      borderWidth: "1px",
      borderStyle: "dotted",
    },
  },
  // sizeやvariantを何も指定しなかった場合、どれを適用させるか
  defaultProps: {
    size: "md",
    variant: "wtih-border-solid",
  },
};
