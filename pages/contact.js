import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Router from "next/router";

export default function Contact() {
    return (
        <Container>
            <form name="contact" 
                method="POST"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label htmlFor='name'></label>
                    <input type='text' id='name' name='name'/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
                {/*}
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
            </form>
    */}
        </Container>
    )
}