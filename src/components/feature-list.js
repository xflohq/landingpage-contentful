import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed" id="features">
      <Box background="muted" radius="large">
        <Box center padding={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {/*props.text && <Text>{props.text}</Text>*/}
          Create and automate workflows to manage and onboard new vendors, match purchase orders to invoices, and process payments faster.
        </Box>
        {props.content?.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
