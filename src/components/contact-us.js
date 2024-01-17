import * as React from "react"
import {
  Container,
  Flex,
  Box,
  Space,
  Button,
} from "./ui"
import * as styles from "./contact-us.css"

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
    .then(() => alert("Thank you for contacting us. One of our colleagues will get back in touch with you soon! Have a great day!"))
     // .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <Box background="primary"  as="contact-us" paddingY={4}>
      <Container  id="contact-us">
      <Flex gap={4} variant="responsive">
          <Box width="half">
            <div className={styles.formDescription}>
              <h1>Talk to Us!</h1> 
              <p style={{ fontSize: 20 }}>Drop us a line to know more about our product and how we can improve your business operations. One of our colleagues will get back in touch with you soon!</p>
              <h3 className={styles.formDescriptionHighlight}>Receive 2 months free plus special perks when you join our early access program! </h3>
            </div>
          </Box>
          <Box width="half">
            <form className={styles.formLayout} ref={formRef}  name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name"  value="contact" />
                <label className={styles.formLabel} for="name">Name <input className={styles.formInput} type="text" name="name" id="name"/> </label>
                <label  className={styles.formLabel} for="email">Email <input className={styles.formInput} type="email" name="email" id="email"/></label>
                <label className={styles.formLabel} for="message">Message <textarea className={styles.formTextArea} name="message" id="message" /></label>
                <Button type="submit" as={'button'} className={styles.formButton}>Send</Button>
            </form>
          </Box>
        </Flex>
        
      </Container>
      <Space size={3} />
    </Box>
  )
}
