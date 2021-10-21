
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleServiceDetail from '../SingleServiceDetail/SingleServiceDetail';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])



    return (
        <div className="container text-center">
            <h1 className="text-warning">Here is the detail of our sevice</h1>

            {
                details.map(detail => <SingleServiceDetail
                    key={detail.serviceName}
                    detail={detail}

                >

                </SingleServiceDetail>)
            }

        </div>
    );
};

export default ServiceDetails;