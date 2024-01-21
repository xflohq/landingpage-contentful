import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
 // FlexList,
  Text,
  Kicker,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
  Nudge,
} from "./ui"
import * as styles from "./stat-list.css"

/*
function Stat(props) {
  return (
    <Box>
      <Text variant="stat">{props.value}</Text>
      <Text variant="statLabel">{props.label}</Text>
    </Box>
  )
}
*/

export default function StatList(props) {
  return (
    <Section padding={50} background="primary">
    <Container id="stats">
        <Flex responsive >
          <Box width="half">
            {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />
            )}
            <Heading>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>
            {false && props.text && <Text variant="lead">{props.text}</Text>}
            <Text variant="lead">
            xflo empowers businesses to supercharge productivity through the automation of financial and operational processes.   
            </Text>
            <Text variant="lead">
Our integrated Procure-to-Pay (“P2P”) solution offers a collaborative platform, underpinned by an AI-enabled hyperautomated workflow engine. 
            </Text>
            {/*
            <FlexList wrap gap={2}>
              {props.content?.map((stat) => (
                <li key={stat.id}>
                  <Stat {...stat} />
                </li>
              ))}
            </FlexList>
             */}
            <ButtonList links={props.links} reversed />
          </Box>
          <Box width="half">
            {props.image && (
              <>
              <div className={styles.desktopStatImage}>
                <Nudge right={5} top={0}>
                  <GatsbyImage
                    alt={props.image.alt}
                    image={getImage(props.image.gatsbyImageData)}
                  />
                </Nudge>
              </div>
              <div className={styles.mobileStatImage}>
                <Nudge top={0}>
                  <GatsbyImage
                    alt={props.image.alt}
                    image={getImage(props.image.gatsbyImageData)}
                  />
                </Nudge>
              </div>
              </>
            )}
          </Box>
        </Flex>
    </Container>
      </Section>
  )
}

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    content {
      id
      value
      label
      heading
    }
    links {
      id
      href
      text
    }
  }
`
