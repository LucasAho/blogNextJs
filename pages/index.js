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
import BlogHomeLayout from '../components/BlogHomeLayout';

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
          <BlogNav handleShow = {handleShow} title="The Creative Spectrum"/>
        

          <h4>Recent Posts</h4>
          <h6>
            When I no longer need to sink my freetime into building this website, I intend to update it regularly with my thoughts on a range of topics. I also include a link to my worldbuilding page and some of the poems and short stories I've written.
            Thanks for checking it out and bearing with the website while it undergoes construction.
            Feel free to <Link href="/contact">contact me</Link>
          </h6>
          <Row>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '75%' }}>
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
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '75%' }}>
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
          </Row>
          <Row>
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '75%' }}>
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
            <Col>
              <Card className="my-1 mx-auto justify-content-center flex-grow-1" style={{ width: '75%' }}>
                  <Card.Body>
                      <Card.Header><h5>{posts[3].title}</h5></Card.Header>
                      <Card.Img src={posts[3].image}></Card.Img>
                      <Card.Text>
                          {posts[3].blurb}
                      </Card.Text>
                      <LinkToArticle id ={posts[3]._id} title={0}/>
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
  const posts = await res.data;
/*
  let recentGenres = {
    poem: '',
    politics: '',
    mental: ''
  }
  posts.map((post, i) => {
    if (post.genre === 'Poetry' && recentGenres.poem === '') {
      recentGenres.poem = { post }
    } else if (post.genre === "Politics" && recentGenres.politics === '') {
      recentGenres.politics = { post }
    } else if (post.genre === "Mental Health" && recentGenres.mental === '') {
      recentGenres.mental = { post }
    } 
    return recentGenres;
  });
  */
  return {
    props: {
      posts: posts
    }
  }
}

export default Home;