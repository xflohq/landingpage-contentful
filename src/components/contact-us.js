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
    .then(() => alert("Thank you for your submission"))
    // .then((result) => console.log('result', result))
     // .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <Box as="contact-us" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
        <form name="contact" method="POST" data-netlify="true" 
    onSubmit={handleSubmit}>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
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
