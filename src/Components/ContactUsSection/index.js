import React from 'react'

import { ContactContainer } from './ContactUsElements';
import Counter from '../Counter'

const ContactUs = () => {
  return (
      <ContactContainer id="contactUs" style={{ height: "600px" }}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8368326972372!2d80.1596535152563!3d13.109521115382917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526396ffffffff%3A0x448fad9dd5eb8515!2sACCURATE%20MACHINES%20AND%20ACCESSORIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1646023967875!5m2!1sen!2sin"
              width="600"
              TITLE="MAP"
              height="450"
              allowfullscreen=""
              loading="lazy"
          ></iframe>
          <Counter  end={21} suffix="+" />
      </ContactContainer>
  );
}

export default ContactUs