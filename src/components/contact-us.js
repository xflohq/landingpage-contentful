import * as React from "react"
import {
  Container,
  Flex,
  Box,
  Space,
} from "./ui"

export default function ContactUs() {

  const formRef = React.useRef(null);

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



  return (
    <Box as="contact-us" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
        <form ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
