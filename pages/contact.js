import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import API from './api/blog-api';
import Link from 'next/link';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()

        let data = {
            name, 
            email,
            message
        }

        API.sendContactForm(data)
        .then(res => {
            if (res.status === 200) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        });
    }

    return (
        <Container>
            {submitted === false ?
            <Form>
                <Form.Group className="my-1" type='text' onChange={(e)=> {setName(e.target.value)}} name='fullname' id='fullname' >
                    <Form.Label htmlFor="yourname">Name</Form.Label>
                    <Form.Control name='name' id='yourname' placeholder="Benek Rogar" />
                </Form.Group>
                <Form.Group className="my-1" type='email'  onChange={(e)=> {setEmail(e.target.value)}} name='emailaddress' id='email-address'>
                    <Form.Label htmlFor="your-email" >Email address</Form.Label>
                    <Form.Control name='email' id='your-email' placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="my-1" type='text' onChange={(e)=> {setMessage(e.target.value)}} name='emailaddress' id='email-address'>
                    <Form.Label htmlFor='message-content'>Message</Form.Label>
                    <Form.Control as="textarea" name='message' rows={3} id='message-content' />
                </Form.Group>
            
                <Button type='submit' onClick={e=>{handleSubmit(e)}} className="blue-bg">
                    Send
                </Button>
            </Form>
            :
            <div className='content-center'>
                Form submitted! I will get back to you as soon 
                as possible, thank you.
                <br />
                <Link
                    href="/"
                    as={'/'}>
                        <a>Home</a>
                </Link>
            </div>
            }
        </Container>
    )
}