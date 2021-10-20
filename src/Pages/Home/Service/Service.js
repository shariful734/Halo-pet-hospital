import './Service.css'

import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { serviceName, serviceImg, description, id } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="service-img" variant="top" src={serviceImg} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}
                        </Card.Text>
                        <Link to={`/serviceDetail/${id}`}> <Button variant="success">See Details</Button> </Link>
                    </Card.Body>
                </Card>

            </Col>
        </div>
    );
};

export default Service;