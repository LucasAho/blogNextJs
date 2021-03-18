import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm(props) {
    return (
        <form className="mx-3" name='contact' action='/success' method="POST" netlify-honeypot='bot-field' data-netlify='true'>
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group className="my-1" type='text' name='fullname' id='fullname' controlId="contactForm.ControlInput1">
                <Form.Label htmlFor="yourname">Name</Form.Label>
                <Form.Control type="name" id='yourname' placeholder="Eiram Fairhome" />
            </Form.Group>
            <Form.Group className="my-1" type='text' name='emailaddress' id='email-address' controlId="contactForm.ControlInput2">
                <Form.Label htmlFor="your-email" >Email address</Form.Label>
                <Form.Control type="email" name='email' id='your-email' placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="my-1" type='text' name='emailaddress' id='email-address' controlId="exampleForm.ControlTextarea1">
                <Form.Label htmlFor='message-content'>Message</Form.Label>
                <Form.Control as="textarea" name='message' rows={3} id='message-content' />
            </Form.Group>
            <Button type='submit' onClick={() => props.cb()}>
                Send
            </Button>
        </form>
    )
}