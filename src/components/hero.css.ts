import { style, keyframes, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

const gradient = keyframes({
  '0%': { backgroundPosition:" 0% 50%" },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
});

export const heroImage = style({
  borderRadius: "16px 16px 70px 16px",
  boxShadow: '12px 13px #70e776',
  marginRight: 20,
  "@media": {
    [media.small]: {
      borderRadius: "16px 16px 100px 16px",
    },
  },
})

export const sectionStyle = style({
  background: "#0e0f18",
 // background: "#0d131e",
// background: "linear-gradient(#fff,#eef1f5 87%)",
	//background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
  // background: "linear-gradient(-45deg, #ee7752, #e73c7e, #111827, #0d131e)",
	backgroundSize: "400% 400%",
	// animation: `${gradient} 45s ease infinite`,
	// height: "75vh",
  color: "#FFFFFF"
})

export const containerStyle = style({
  // marginTop: 30
  paddingTop: 50,
  paddingBottom: 50,
  zIndex: 1,
  position: 'relative'
})

export const patternStyle = style({
  position: 'absolute',
  top: '130px',
  right: '90px',
  opacity: 20,
  color: '#3333335c',
  zIndex: 0
})
