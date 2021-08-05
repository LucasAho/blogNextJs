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
import SectionHeader from "../components/portfolioSectionHeader";
import { Footer } from '../components/footer2';

function Home({ essays, poems, hiking }) {
  
  String.prototype.trimEllip = function (length) {
    return this.length > length ? this.substring(0, length) + "..." : this;
  }

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
        <Container className="py-3">
            <Row>
              <SectionHeader
                  titleText="Worldbuilding"
                  subText="The wiki for my constructed languages and the worldbuilding that goes towards my work-in-progress sci-fantasy series."
                  variant="p"
                  color="dark"
              />
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                        <Card.Img  variant='top' src="https://i.imgur.com/r837OdL.png"></Card.Img>
                    <Card.Body>
                        <Card.Title>Constructed Languages</Card.Title>
                        <Card.Text>
                          Documentation for my constructed languages, slowly updated as I have time.
                        </Card.Text>
                        <Link href="/worldbuild/home">Wiki</Link>
                    </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                        <Card.Img  variant='top' src="https://i.imgur.com/r837OdL.png"></Card.Img>
                    <Card.Body>
                        <Card.Title>Wiki</Card.Title>
                        <Card.Text>
                          The wiki page for the setting of my sci-fantasy novel
                        </Card.Text>
                        <Link href="/worldbuild/home">Wiki</Link>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
        <Container className="py-3 purple-bg">
            <Row>
              <SectionHeader
                  titleText="Hiking"
                  subText="A collection of write-ups and photos taken from my adventures in the mountains"
                  variant="p"
                  color="light"
              />
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                    <Card.Img variant='top' className="blog-card" src={hiking[0].image} />
                    <Card.Body>
                        <Card.Title>{hiking[0].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{hiking[0].dateWritten}</Card.Subtitle>
                        <Card.Text>
                            {
                              hiking[0].blurb.trimEllip(150)
                            }
                        </Card.Text>
                        <LinkToArticle id ={hiking[0]._id} title={0}/>
                    </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                    <Card.Img variant='top' className="blog-card" src={hiking[0].image} />
                    <Card.Body>
                        <Card.Title>{hiking[0].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{hiking[0].dateWritten}</Card.Subtitle>
                        <Card.Text>
                            {
                              hiking[0].blurb.trimEllip(150)
                            }
                        </Card.Text>
                        <LinkToArticle id ={hiking[0]._id} title={0}/>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
        <Container className="py-3">
            <Row>
              <SectionHeader
                  titleText="Essays"
                  subText="Political and philosophical essays"
                  variant="p"
                  color="dark"
              />
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                        <Card.Img variant='top' className="blog-card" src={essays[0].image} />
                    <Card.Body>
                        <Card.Title>{essays[0].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{essays[0].dateWritten}</Card.Subtitle>
                        <Card.Text>
                            {essays[0].blurb}
                        </Card.Text>
                        <LinkToArticle id ={essays[0]._id} title={0}/>
                    </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                        <Card.Img variant='top' className="blog-card" src={essays[1].image} />
                    <Card.Body>
                        <Card.Title>{essays[1].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{essays[1].dateWritten}</Card.Subtitle>
                        <Card.Text>
                            {essays[1].blurb}
                        </Card.Text>
                        <LinkToArticle id ={essays[1]._id} title={0}/>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container className="py-3 purple-bg">
              <Row>
                <SectionHeader
                    titleText="Poetry"
                    subText="I am slowly learning how to write poetry for the sake of my novel, I publish what I write here. While I have come a long way since my first poem, I am far from mastering the art."
                    variant="p"
                    color="light"
                />
                <Col md={6}>
                  <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                      <Card.Img variant='top' className="blog-card" src={poems[0].image} />
                      <Card.Body>
                          <Card.Title>{poems[0].title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{poems[0].dateWritten}</Card.Subtitle>
                          <Card.Text>
                              {
                                poems[0].blurb.trimEllip(150)
                              }
                          </Card.Text>
                          <LinkToArticle id ={poems[0]._id} title={0}/>
                      </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                      <Card.Img variant='top' className="blog-card" src={poems[1].image} />
                      <Card.Body>
                          <Card.Title>{poems[1].title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{poems[1].dateWritten}</Card.Subtitle>
                          <Card.Text>
                              {
                                poems[1].blurb.trimEllip(150)
                              }
                          </Card.Text>
                          <LinkToArticle id ={poems[1]._id} title={0}/>
                      </Card.Body>
                  </Card>
                </Col>
              </Row>
          </Container>
        </Container>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const hiking = await API.getTopicsWhere("Hiking");
  const hikingPosts = await hiking.data.reverse();
  const essays = await API.getTopicsWhere("Philosophy");
  const essayPosts = await essays.data.reverse();
  const poems = await API.getTopicsWhere("Poetry");
  const poemPosts = await poems.data.reverse();
  return {
    props: {
      essays: essayPosts,
      poems: poemPosts,
      hiking: hikingPosts
    }
  }
}

export default Home;