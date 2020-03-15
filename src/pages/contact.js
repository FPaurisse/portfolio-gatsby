import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/page.module.css';

const Contact = ({ location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.GATSBY_API_URL}send`,
      data: { name, email, message },
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  };

  return (
    <Layout location={location}>
      <SEO
        title="Contact"
        description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
      />
      <div className={s.Page}>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <input type="text" placeholder="Name" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <input type="email" placeholder="Email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <textarea placeholder="Message" className="form-control" rows="5" id="message" onChange={(e) => setMessage(e.target.value)} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
