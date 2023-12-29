import * as React from "react"
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

export default function ContactUs() {

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => alert("Thank you for contacting us. One of our colleagues will get back in touch with you soon!Have a great day!"))
    // .then((result) => console.log('result', result))
     // .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  React.useEffect(() => {
    document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  }, [])


  return (
    <Box as="contact-us" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
        </form>
        </Flex>
        
      </Container>
      <Space size={3} />
    </Box>
  )
}
