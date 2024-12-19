import React, { useState } from 'react';
import styles from './ContactPage.module.scss';
import Container from '../../Common/Container/Container';
import InputGroup from '../../UI/InputGroup/InputGroup';
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux';

const ContactPage = () => {

  const contactPageData = useSelector(state => state.data.data.contactPage)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      // Add further form submission logic here (e.g., API call)
    }
  };

  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Contact</div>
        </div>
        <div className={styles.body}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InputGroup
              id="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              error={errors.firstName}
            />
            <InputGroup
              id="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              error={errors.lastName}
            />
            <InputGroup
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              error={errors.email}
            />
            <InputGroup
              id="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              type="tel"
            />
            <InputGroup
              id="message"
              label="Your Message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              isTextArea
              error={errors.message}
            />
            <Button type="submit" className={styles.submitButton}>Send</Button>
          </form>
          <div className={styles.text}>
            <div dangerouslySetInnerHTML={{ __html: contactPageData.text }}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
