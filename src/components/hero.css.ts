import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const heroImage = style({
  borderRadius: "16px 16px 120px 16px",
  "@media": {
    [media.small]: {
    },
  },
})
