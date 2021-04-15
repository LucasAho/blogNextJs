import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BigPanel, SmallPanel } from '../components/featuredPanel'
import BlogNav from '../components/blogNav';
import { useState } from "react";
import API from './api/blog-api';

function Home({ recentGenres }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Asher</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
          <BlogNav handleShow = {handleShow} title="The Creative Spectrum"/>
          <Row>
            <Col md={9} className='mx-auto'>
              <h6>World of Maalima</h6>
              <BigPanel/>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <h6>Poetry</h6>
              <SmallPanel data = {recentGenres.poem}/>
            </Col>
          </Row> 
          <Row>
            <Col md={9}>
              <h6>Mental Health</h6>
              <SmallPanel data = {recentGenres.mental}/>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <h6>Politics</h6>
              <SmallPanel data = {recentGenres.politics}/>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const res = await API.getAllPosts();
  const posts = await res.data;

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
  
  return {
    props: {
      recentGenres
    }
  }
}

export default Home;