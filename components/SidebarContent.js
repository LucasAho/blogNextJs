import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from 'next/link';

function SidebarContent({ posts }) {
    return (
        <Container className='px-1'>
            <h5>Recent Articles</h5>
            {posts.map((post, i) => {
                return ( 
                    <Card key={i++}>
                        <Card.Body>
                            <Link
                                href="/article/[slug]"
                                as={`/article/${post._id}`}>
                                <h6>{post.title}</h6>
                            </Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </Container>
    )
}

export default SidebarContent