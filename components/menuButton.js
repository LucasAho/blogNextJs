import React from 'react';
import Scroll from 'react-scroll';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MenuButton() {
    const scroller = Scroll.scroller;

    
    const handleScroll = id => {
        scroller.scrollTo(id, {
            duration: 100,
            smooth: true
        });
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant='secondary' className="blue-bg menu-scroller">
                <FontAwesomeIcon icon={['fas', 'bars']} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item onClick={()=> handleScroll('bio')}>Bio</Dropdown.Item>
                <Dropdown.Item onClick={()=> handleScroll('port')}>Portfolio</Dropdown.Item>
                <Dropdown.Item onClick={()=> handleScroll('blog')}>Blog</Dropdown.Item>
                <Dropdown.Item onClick={()=> handleScroll('podcast')}>Podcast</Dropdown.Item>
                <Dropdown.Item onClick={()=> handleScroll('contact')}>Contact Info</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}