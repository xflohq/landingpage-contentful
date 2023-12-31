import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"


export const formInput= style({
    width: 'clamp(120px, 50vw, 420px)',
    height: '2.5rem',
    padding: '0 1.25rem',
    border: '1px solid #000',
    borderRadius: 2,
    margin: '0.625rem auto',
    transition: 'all 250ms',
    
    // This is basically saying when the form__input class is in focus
    ':focus': {
      outline: 'none',
      borderTopColor: 'rgba(0,0,0,0.1)'
    },
    
  
   '::placeholder': {
        display: 'none',
        color: 'transparent',
        userSelect: 'none'
    },
    
  },
)

export const formLabel = style({

  fontSize: '1rem',
  color: '#666',
  display: 'block',
  
  transform: 'translate(1.25rem,-2.5rem)',
  transformOrigin: '0 0', 
  transition: 'all 500ms',
  
})

