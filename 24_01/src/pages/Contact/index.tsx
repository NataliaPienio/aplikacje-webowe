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
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type, checked } = e.target as HTMLInputElement;;
  
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formValues);
    };
  
    return (
      <div>
        <Heading title='Contact' level={1} />
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={formValues.email} onChange={handleInputChange} required />
          </label><br/>
  
          <label>
            Topic:
            <select name="topic" value={formValues.topic} onChange={handleInputChange} required>
              {predefinedTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label><br/>
  
          <label>
            <input type="checkbox" name="agree" checked={formValues.agree} onChange={handleInputChange} />
            I agree to process my personal data
          </label><br/>
  
          <label>
            Message:
            <textarea name="message" value={formValues.message} onChange={handleInputChange} required />
          </label><br/>
  
          <button type="submit">Send</button>
        </form>
  
        <Footer />
      </div>
    );
  };
  
  export default Contact;