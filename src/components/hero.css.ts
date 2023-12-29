import { style, keyframes, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

const gradient = keyframes({
  '0%': { backgroundPosition:" 0% 50%" },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
});

export const heroImage = style({
  borderRadius: "16px 16px 120px 16px",
  "@media": {
    [media.small]: {
    },
  },
})

export const sectionStyle = style({
  //background: "#000000",
	// background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
	// backgroundSize: "400% 400%",
	animation: `${gradient} 45s ease infinite`,
	// height: "100vh",
  // color: "#FFFFFF"
})

export const containerStyle = style({
  marginTop: 30
})
