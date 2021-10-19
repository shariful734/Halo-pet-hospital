import './Services.css';

import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="container">

            <div className="text-center p-5">
                <h1>Here are services</h1>
                <p>We take Extra care of your pet and the surgeries are done with extra care</p>

            </div>

            <Row xs={1} md={2} xl={3} className="g-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }

            </Row>


        </div>
    );
};

export default Services;