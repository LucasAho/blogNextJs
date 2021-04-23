import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from './api/blog-api';
import { useUser } from "@auth0/nextjs-auth0"

export const getStaticProps = async ({ }) => {
    const res = await API.getTopics();
    const data = await res.data;
    const uniqueData = [...new Map(data.map(item => [item.genre, item])).values()]
    let uniq = uniqueData;
    return {
        props: {
            topics: uniq
        }
    }
}

export default function WritePost({ topics }) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj);   

    }
    
    return (
        <Container>
            <Row>
                <Col md='8'>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group controlId="newPost.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="newPost.ControlInput1">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control 
                                name="image"
                                required
                                type="text" />
                        </Form.Group>
                        <Form.Group controlId="newPost.ControlSelect2">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control as="select" multiple
                                required
                                name="topic">
                                {topics.map((topic,i) => {                                    
                                    return(
                                        <option key={i++}>{topic.genre}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="newPost.ControlTextarea1">
                            <Form.Label>Blurb</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="blurb" 
                                rows={4}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="newPost.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            name="content" 
                            required
                            rows={8} 
                            />
                        </Form.Group>
                        <Button variant="primary" className="my-2" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container> 
    )
}
