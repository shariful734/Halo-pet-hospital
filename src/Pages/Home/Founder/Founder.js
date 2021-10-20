import './Founder.css'
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import founder1 from '../../../images/founder-1.jpg'
import founder2 from '../../../images/founder-4.jpg'

const Founder = () => {
    return (
        <div className="mx-5 my-5">

            <div className="text-center">
                <h1>Our Founders</h1>
                <p>Our founders have made possible who we are now</p>
            </div>

            <Row xs={1} md={2} xl={2} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={founder1} />
                        <Card.Body>
                            <Card.Title><h3>Henrry Millar</h3></Card.Title>
                            <Card.Text>
                                <p>ALLARD, A. Wayne, a Representative and a Senator from Colorado; born in Fort Collins, Colo., December 2, 1943; attended the public schools in Walden and Fort Collins, Colo.; graduated from Colorado State University with a degree in veterinary medicine 1968; practiced veterinary medicine in Loveland, Colo.; member of the Colorado state senate 1982-1990; elected as a Republican to the One Hundred Second and to the two succeeding Congresses, and served from January 3, 1991, to January 2, 1997; not a candidate for reelection to the House of Representatives in 1996; elected as a Republican to the United States Senate in 1996, reelected in 2002, and served from January 3, 1997, to January 3, 2009; was not a candidate for reelection in 2008.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={founder2} />
                        <Card.Body>
                            <Card.Title><h3>Oliver Smith</h3></Card.Title>
                            <Card.Text>
                                <p>ENSIGN, John Eric, a Senator and a Representative from Nevada; born in Roseville, Placer County, Calif., March 25, 1958; graduated E.W. Clark High School, Las Vegas, 1976; attended University of Nevada 1979; B.S., Oregon State University, Corvalis 1981; D.V.M. Colorado State University, Fort Collins 1985; owner, West Flamingo Animal Hospital, Las Vegas 1987; general manager, Gold Strike Hotel and Casino 1991; general manager, Nevada Landing Hotel and Casino; elected as a Republican to the One Hundred Fourth and One Hundred Fifth Congresses (January 3, 1995-January 3, 1999); was not a candidate in 1998 for reelection to the U.S. House of Representatives; was an unsuccessful candidate for election to the United States Senate in 1998; elected to the United States Senate in 2000; reelected in 2006</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>



        </div >
    );
};

export default Founder;