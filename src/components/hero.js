import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
// import { Slice } from "gatsby"
import { heroImage, sectionStyle, containerStyle, patternStyle } from "./hero.css"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

export default function Hero(props) {
  return (
    <Section className={sectionStyle}>
      {/*<Slice alias="header" />*/}
      <Container className={containerStyle}>
        
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
                className={heroImage}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {/*props.kicker && <Kicker>{props.kicker}</Kicker>*/}
              {props.h1}
            </Heading>
            <Subhead as="h2">
              {/*props.subhead*/}
            </Subhead>
            <Text as="p">
              {/*props.text*/}
              Empowering businesses to turbocharge productivity through the automation of financial and operational processes
            </Text>
            <ButtonList links={props.links}  />
          </Box>
        </Flex>
      </Container>
      <svg
          className={patternStyle}
          component='svg'
          sx={{ color: 'primary.light' }}
          viewBox='0 0 220 192'
          width='300px'
          height='292px'
          fill='none'
      >
          <defs>
              <pattern
                  id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
              >
                  <rect x='0' y='0' width='4' height='4' fill='currentColor' />
              </pattern>
          </defs>
          <rect
              width='220'
              height='192'
              fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
          />
      </svg>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
