import { style } from "@vanilla-extract/css"
import { media } from "./ui.css"


export const desktopStatImage = style({
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
    },
  },
})

export const mobileStatImage = style({
  display: "block",
  "@media": {
    [media.medium]: {
      display: "none",
    },
  },
})

