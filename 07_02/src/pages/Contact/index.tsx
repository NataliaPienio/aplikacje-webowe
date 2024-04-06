import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import React, { useState } from 'react';

interface FormValues {
  email: string;
  topic: string;
  agree: boolean;
  message: string;
}

const predefinedTopics = ['Temat1', 'Temat2', 'Temat3', 'Temat4', 'Temat5'];

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    topic: predefinedTopics[0],
    agree: false,
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formValues.message.trim() || formValues.message.length < 20) {
      errors.message = 'Message must be at least 20 characters long';
    }

    if (!formValues.agree) {
      errors.agree = 'You must agree to process your personal data';
    }

    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      setMessageSent(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <Heading title='Contact' level={1} />
      {messageSent ? ( 
        <p>Your message has been sent</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={formValues.email} onChange={handleInputChange} /><br/>
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </label><br />

          <label>
            Topic:
            <select name="topic" value={formValues.topic} onChange={handleInputChange}>
              {predefinedTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label><br />

          <label>
            <input type="checkbox" name="agree" checked={formValues.agree} onChange={handleInputChange} />
            I agree to process my personal data
          </label><br />

          <label>
            Message:
            <textarea name="message" value={formValues.message} onChange={handleInputChange} /><br/>
            {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
          </label><br />

          <button type="submit">Send</button>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
