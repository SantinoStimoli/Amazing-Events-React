import React from 'react';
import ContactForm from '../Components/pure/ContactForm';
import Title from '../Components/pure/Title';

const Contact = () => {
    return (
        <div className='container mx-auto'>
            <Title title={'Contact'}>
                <p>Hi User! How are you? in this section you can leave us a message with a report about our page, our team will contact you as soon as we receive your message, thank you very much for your attention and sorry for the inconvenience</p>
            </Title>
            <ContactForm />
        </div>
    );
}

export default Contact;
