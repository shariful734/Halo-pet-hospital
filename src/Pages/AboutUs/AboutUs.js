import React from 'react';
import './AboutUs.css'
import hospitalHall from '../../images/hospital-hall-1.jpg'

const AboutUs = () => {
    return (

        <div className=" container">

            <h1 className="text-center text-warning my-3">About Us</h1>

            <div className="d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-center align-item-center">
                        <img className="hall-img" src={hospitalHall} alt="" />
                    </div>

                    <div className="my-5">


                        <p>When your pet is sick or injured, treatment usually begins with your local veterinarian, a skilled and highly trained Doctor. Occasionally though, their patient (your pet) requires specialized care, and access to cutting-edge medical technology.

                            This is where ACCESS comes in.Advanced Critical Care, Emergency and Specialty Services provides veterinarians and pet owners with advanced medical treatment supported by cutting-edge technology. With emergency doctors available 24 hours a day, and a team of board-certified specialists on call in our Departments of Avian and Exotic Pets, Cardiology, Critical Care, Internal Medicine, Interventional Radiology/Endoscopy, Neurology/Neurosurgery, and Surgery, we are ready to provide compassionate comprehensive advanced medical care for your pets – 24hrs, 365 days a year.

                        </p>

                        <p>Some of the areas in which Halo Animal Hospital is an industry leader include:

                            Dentistry: Dental care plays an important role in protecting pet’s overall health and Dr. Kate has ensured that all Doctors are trained on the most current dentistry and advanced techniques. This includes digital dental x-rays and a dedicated dentistry treatment area.

                            <span className="fw-bold"> X-rays:</span> X-rays have been standard equipment at Anchor Animal Hospital since it opened. The doctors and staff pride themselves on their ability to take and interpret x-rays. Our doctors are also trained to perform contrast studies to help diagnose gastrointestinal, kidney, or bladder disease.

                            <span className="fw-bold">Ultrasound:</span>  Anchor Animal Hospital was one of the first veterinary hospitals in the South Coast of Massachusetts to bring ultrasound into veterinary practice. For more than 20 years we have been performing both abdominal ultrasound and echocardiograms (ultrasound of the heart). We now are offering referral ultrasounds to other local veterinary hospitals to help them take advantage of this very useful diagnostic tool.

                            <span className="fw-bold">Pain Management:</span> Dr. Kate has a passion for advancing pain management and treatment of both acute and chronic pain in our pets. She has brought new pain control options to Anchor Animal Hospital, including laser therapy and acupuncture. She has received certification in both of these techniques and she is able to use them to help manage acute and chronic pain to promote healing.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;