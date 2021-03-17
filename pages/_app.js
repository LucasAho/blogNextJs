import '../styles/globals.css';
import '../styles/custom.scss';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; 
library.add(
  faGithub, faBars, faLinkedin, faInstagram, faEnvelope
);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
