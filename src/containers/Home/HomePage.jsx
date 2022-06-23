import {UseMedia} from 'hooks/useMedia';
import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Birds from '../../components/Birds';
import {Accordion} from '../../components/FAQ/faq.jsx';
import Footer from '../../components/Footer/footer.jsx';
import {
  Logo,
  LogoSectionAbout
} from '../../components/logo-section/logoSection.jsx';
import Media from '../../components/media/media.jsx';
import {
  FirstPrize,
  PrizeHeading
} from '../../components/prize tracks/prizes.jsx';
import {
  Sponsor,
  SponsorsHead,
} from '../../components/Sponsors/sponsors.jsx';
import {Myinfo} from '../../components/Top-division-components/Top-division-components.jsx';
import {
  frequentlyAskedQuestions,
  PrizeInfo,
  sponsorLogos,
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './pattern4.png';

function SponsorGroup(props) {
  return (
    <Row>
      {props.map((s, index) => (
        <Col className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}



function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_section" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizeSection" id="prizes">
          <PrizeHeading type="Prizes to be WON!" />
          {PrizeInfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}
      </Container>
      <Footer />
    </div>
  );
}
