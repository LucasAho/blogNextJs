import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
    return (
        <Container>
            <Form name="contact" method="POST" action="/success" data-netlify="true">
                <input type="hidden" name="contact-form" value="contact"/>
                <Form.Group className="my-1" type='text' name='fullname' id='fullname' controlId="contactForm.ControlInput1">
                    <Form.Label htmlFor="yourname">Name</Form.Label>
                    <Form.Control name='name' id='yourname' placeholder="Benek Thrufyr" />
                </Form.Group>
                <Form.Group className="my-1" type='text' name='emailaddress' id='email-address' controlId="contactForm.ControlInput2">
                    <Form.Label htmlFor="your-email" >Email address</Form.Label>
                    <Form.Control name='email' id='your-email' placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="my-1" type='text' name='emailaddress' id='email-address' controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor='message-content'>Message</Form.Label>
                    <Form.Control as="textarea" name='message' rows={3} id='message-content' />
                </Form.Group>
                <Button type='submit' className="blue-bg">
                    Send
                </Button>
            </Form>
        </Container>
    )
}