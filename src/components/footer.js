import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
  Linkedin,
  Mail
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
//import BrandLogo from "./brand-logo"

const socialMedia = {
  MAIL: {
    url: "",
    name: "E-mail",
    icon: <Mail />,
  },
  LINKEDIN: {
    url: "https://linkedin.com",
    name: "LinkedIn",
    icon: <Linkedin />,
  },
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { links, meta, socialLinks } = data.layout.footer

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <svg width="40" height="40" viewBox="0 0 478 479" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M311.247 69.253L242 138.505V187.253V236H290.753H339.505L408.253 167.247L477 98.495V53.96V9.425L472.216 4.712L467.431 0H423.963H380.495L311.247 69.253ZM4.712 5.784L0 10.569V55.037V99.505L68.753 168.253L137.505 237H186.253H235V188.247V139.495L165.747 70.247L96.495 1H52.96H9.425L4.712 5.784ZM466.52 7.646C467.808 8.14 452.751 23.744 402.354 74.146L336.506 140H293.753C270.239 140 251 139.664 251 139.253C251 138.842 280.586 108.917 316.747 72.753L382.494 7H423.665C446.309 7 465.594 7.291 466.52 7.646ZM160.372 73.872L226.237 139.743L183.987 140.488L141.736 141.234L75.119 74.617L8.502 8H51.504H94.506L160.372 73.872ZM471 52.747V95.494L405.253 161.247C369.092 197.411 339.167 227 338.753 227C338.339 227 338 207.764 338 184.253V141.506L403.747 75.753C439.908 39.589 469.833 10 470.247 10C470.661 10 471 29.236 471 52.747ZM139 184.699C139 208.515 138.661 228 138.247 228C137.833 228 107.87 198.373 71.662 162.162L5.83 96.324L6.561 53.721L7.291 11.117L73.146 76.258L139 141.398V184.699ZM313.338 142.66L336 143.319V186.66V230L294.75 229.986C272.063 229.979 252.488 229.701 251.25 229.37L249 228.767V185.383V142H269.838C281.3 142 300.875 142.297 313.338 142.66ZM228.761 186.25L228.5 229.5L184.589 229.761L140.678 230.021L141.339 202.848C141.703 187.903 142 168.323 142 159.338V143H185.511H229.021L228.761 186.25ZM242.912 243.75C242.864 244.162 242.889 266.1 242.968 292.5L243.11 340.5L312.302 409.75L381.495 479H425.035H468.575L473.288 474.216L478 469.431V424.963V380.495L409.247 311.747L340.495 243H291.747C264.936 243 242.961 243.338 242.912 243.75ZM143 291.338V334.677L175.25 335.337C192.988 335.7 212.563 335.997 218.75 335.998L230 336V292V248H186.5H143V291.338ZM336.66 272.662C336.297 285.125 336 304.7 336 316.162V337H292.5H249V293.5V250H293.16H337.319L336.66 272.662ZM71.747 318.753L4 386.505V430V473.495L72.5 405L141 336.505V293.753C141 270.239 140.661 251 140.247 251C139.833 251 109.008 281.489 71.747 318.753ZM406.204 317.75L471.887 383.5L471.309 426C470.992 449.375 470.617 468.637 470.477 468.805C470.338 468.973 440.698 439.782 404.612 403.936L339 338.762V295.381C339 271.521 339.342 252 339.76 252C340.178 252 370.078 281.587 406.204 317.75ZM74 406.5L5.505 475H49.005H92.506L160.253 407.247C197.514 369.983 228 339.158 228 338.747C228 338.336 208.761 338 185.247 338H142.495L74 406.5ZM403 405.5L469.494 472H426.494H383.494L317.52 406.02L251.546 340.04L273.523 339.75C285.61 339.59 304.726 339.356 316.003 339.229L336.506 339L403 405.5Z" fill="#162034"/>
            </svg>
            <span style={{ marginLeft: 10, fontSize: 30, fontWeight: 800, color: '#162034' }}>xflo</span>
          </NavLink>
          <Space />
          <FlexList>
            <li>
              <IconLink to='https://www.linkedin.com/company/xfloinnovations'>
                <VisuallyHidden>{getSocialName({
                  service: 'LINKEDIN'
                })}</VisuallyHidden>
                {getSocialIcon({
                  service: 'LINKEDIN'
                })}
              </IconLink>
            </li>
            <li>
              <IconLink to='https://www.x.com/xflo_official'>
                <VisuallyHidden>{getSocialName({
                  service: 'TWITTER'
                })}</VisuallyHidden>
                {getSocialIcon({
                  service: 'TWITTER'
                })}
              </IconLink>
            </li>
            <li>
              <IconLink to='mailto:hello@xflo.io'>
                <VisuallyHidden>{getSocialName({
                  service: 'MAIL'
                })}</VisuallyHidden>
                {getSocialIcon({
                  service: 'MAIL'
                })}
              </IconLink>
            </li>
            {false && socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                console.log('link', link, url)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
              <NavLink to='#features' style={{ color: '#162034' }}>Product</NavLink>
              <NavLink to='#solution' style={{ color: '#162034' }}>Solution</NavLink>
              <NavLink to='#stats' style={{ color: '#162034' }}>About</NavLink>
            {false && links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}  style={{ color: '#162034' }}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small" style={{ color: '#162034' }}>{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">© 2024 Xflo Innovations Pte. Ltd. All Rights Reserved.</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
