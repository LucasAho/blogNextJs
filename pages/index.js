import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../components/blogNav';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import LinkToArticle from "../components/LinkToArticle";
import API from './api/blog-api';
import Link from "next/link"
import Button from "react-bootstrap/Button";

function Home({ posts }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Asher</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
          <BlogNav 
            title="The Creative Spectrum"
            tLink="/"  
            title2="Maalima"
            t2Link="/worldbuild/home"
          />
          <h6>
            Once this website starts to near completion, I intend to post regularly on a range of topics. I also include a link to my work in progress worldbuilding page and some of the poems and short stories I've written.
            Thanks for checking it out and bearing with the website while it undergoes construction.
            {/*Feel free to <Link href="/contact" ><a className="decorated-link">contact me</a></Link> (note that contact form has been a wee bit buggy, so if I don't get back to you, try connecting via my socials)*/}
          </h6>
          <Row>
          <h4>Most Recent Articles</h4>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '85%' }}>
                  <Card.Body>
                      <Card.Header><h5>{posts[0].title}</h5></Card.Header>
                      <Card.Img src={posts[0].image}></Card.Img>
                      <Card.Text>
                          {posts[0].blurb}
                      </Card.Text>
                      <LinkToArticle id ={posts[0]._id} title={0}/>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '85%' }}>
                  <Card.Body>
                      <Card.Header><h5>Tukren Phonology</h5></Card.Header>
                      <Card.Img src="https://i.imgur.com/qwsxzsC.jpg"></Card.Img>
                      <Card.Text>
                          I am still deciding how to structure the conlang pages, so don't expect much here. 
                      </Card.Text>
                      <Link href="/worldbuild/conlang/tukren">
                        <Button className="stretched-link primary-btn">See Post</Button>
                      </Link>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '85%' }}>
                  <Card.Body>
                      <Card.Header><h5>{posts[1].title}</h5></Card.Header>
                      <Card.Img src={posts[1].image}></Card.Img>
                      <Card.Text>
                          {posts[1].blurb}
                      </Card.Text>
                      <LinkToArticle id ={posts[1]._id} title={0}/>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '85%' }}>
                  <Card.Body>
                      <Card.Header><h5>{posts[2].title}</h5></Card.Header>
                      <Card.Img src={posts[2].image}></Card.Img>
                      <Card.Text>
                          {posts[2].blurb}
                      </Card.Text>
                      <LinkToArticle id ={posts[2]._id} title={0}/>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const res = await API.getAllPosts();
  const posts = await res.data.reverse();
  return {
    props: {
      posts: posts
    }
  }
}

export default Home;