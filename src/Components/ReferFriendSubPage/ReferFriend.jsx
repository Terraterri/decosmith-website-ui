import React, { useState } from 'react';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClient } from '../../Utills/httpClient';



const ReferFriend = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });


    const [formData, setFormData] = useState({
        yourName: '',
        yourEmail: '',
        yourNumber: '',
        friendName: '',
        friendEmail: '',
        friendNumber: '',
        message: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consent) {
            toast.error("You must confirm your friend's consent.");
            return;
        }

        try {
            const response = await apiClient.post("/referFrined", formData);
            console.log('Success:', response.data);
            toast.success("Form submitted successfully!");
            // Optionally clear form
            setFormData({
                yourName: '',
                yourEmail: '',
                yourNumber: '',
                friendName: '',
                friendEmail: '',
                friendNumber: '',
                message: '',
                consent: false,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Please enter a valid 10-digit mobile number");
        }
    };

    return (
        <>
            <nav aria-label="breadcrumb mt-5 mb-5"><ol class="breadcrumb"></ol></nav>
            <section className='referFriend'>
                <div className="container">
                    <h1 className='mainTitle text-center mb-4 text-uppercase'> Refer a Friend</h1>
                    <div className="row justify-center align-items-center mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2 className='underLineContact mb-0'><span className='pe-3 mainColor'></span>Refer a Friend:</h2>
                            <p className='furni-p mb-3 fs-5'>The <span className='spanTitle '>Decosmith</span> referral program is a way for current or former <span className='spanTitle '>Decosmith</span> customers to refer friends or family members to <span className='spanTitle '>Decosmith</span> for their home interiors and earn rewards for successful referrals. Here's how it works:</p>
                            <div className='text-start'>
                                <button type="button" className="become-btn mt-0 black" data-bs-toggle="modal" data-bs-target="#exampleModal">Refer Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <img src="assets/images/work/ReferFriend.jpg" alt="" className='referimg' />
                        </div>
                    </div>




                </div>

            </section>
            <section className='referFriend2'>
                <div className="container">
                    <h2 className='text-center text-uppercase main-title'>How it works</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="referCard border-r1">
                                <div className='icon'>
                                    {/* <BsFillPersonPlusFill /> */}
                                    <img src="assets/images/blog/fa1.jpg" alt="" />
                                </div>
                                <h3 className='blue'>Referral Reward</h3>
                                <p className=''>For each successful referral, the referrer earns ₹25,000.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="referCard">
                                <div className='icon'>
                                    <img src="assets/images/blog/fa2.jpg" alt="" />

                                </div>
                                <h3 className='green'>Eligibility</h3>
                                <p className=''>To be eligible for the referral program, the friends you refer must get their home interiors done by Decosmith, with a minimum project value of ₹3 lakh.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard border-r">
                            <div className='icon'>
                                <img src="assets/images/blog/fa3.jpg" alt="" />

                            </div>
                            <h3 className='red'>Referral Process</h3>
                            <p className=''>To refer someone, the referrer fills out a form at Decosmithoffice with their own and their friend's details (name, phone number, and email ID).
                                - ₹25,000 is rewarded when the referred friend finalizes the order with Decosmithwith 25% payment.
                            </p>
                        </div></div>
                    </div>
                    <div className="row  mb-50">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 "> <div className="referCard border-r1">
                            <div className='icon'>
                                <img src="assets/images/blog/fa4.jpg" alt="" />


                            </div>
                            <h3 className='blue'>Number of Referrals</h3>
                            <p className=''>There is no limit to the number of friends a referrer can refer.</p>
                        </div></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard">
                            <div className='icon'>
                                <img src="assets/images/blog/fa5.jpg" alt="" />


                            </div>
                            <h3 className='green'>Payouts</h3>
                            <p className=''>Payouts are made via bank transfers. They are processed between the 15th and 20th of each month. </p>
                        </div></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard border-r">
                            <div className='icon'>
                                <img src="assets/images/blog/fa6.jpg" alt="" />

                            </div>
                            <h3 className='red'>Payout Issues</h3>
                            <p className=''>If a referrer hasn't received their referral payouts despite eligibility and a successful referral, they can contact Decosmithcustomer support at care@Decosmith.com for assistance.</p>
                        </div></div>

                        {/* <div class="card_box">
        <span></span>
    </div> */}
                    </div>
                    <div className="row  text-center  Furnishing-lastText">

                        <h3> Overall, the <span className='spanTitle'>Decosmith</span> referral program incentivizes anyone to refer their friends and family to <span className='spanTitle'>Decosmith</span> for home interior projects and rewards them for successful referrals.</h3>
                    </div>
                </div>
            </section>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Refer Now</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><IoMdClose /></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    {/* Your Name */}
                                    <div className="col-md-4 col-sm-12 pe-0 mb-2">
                                        <div className="form-group">
                                            <label>Your Name</label>
                                            <input
                                                type="text"
                                                name="yourName"
                                                className="form-control"
                                                value={formData.yourName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Your Email */}
                                    <div className="col-md-4 col-sm-12 pe-0 mb-2">
                                        <div className="form-group">
                                            <label>Your Email</label>
                                            <input
                                                type="email"
                                                name="yourEmail"
                                                className="form-control"
                                                value={formData.yourEmail}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Your Number */}
                                    <div className="col-md-4 col-sm-12 mb-2">
                                        <div className="form-group">
                                            <label>Your Number</label>
                                            <input
                                                type="text"
                                                name="yourNumber"
                                                className="form-control"
                                                value={formData.yourNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Friend Name */}
                                    <div className="col-md-4 col-sm-12 pe-0 mb-2">
                                        <div className="form-group">
                                            <label>Friend Name</label>
                                            <input
                                                type="text"
                                                name="friendName"
                                                className="form-control"
                                                value={formData.friendName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Friend Email */}
                                    <div className="col-md-4 col-sm-12 pe-0 mb-2">
                                        <div className="form-group">
                                            <label>Friend Email</label>
                                            <input
                                                type="email"
                                                name="friendEmail"
                                                className="form-control"
                                                value={formData.friendEmail}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Friend Number */}
                                    <div className="col-md-4 col-sm-12 mb-2">
                                        <div className="form-group">
                                            <label>Friend Number</label>
                                            <input
                                                type="text"
                                                name="friendNumber"
                                                className="form-control"
                                                value={formData.friendNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="col-md-12 col-sm-12 mb-1">
                                    <div className="form-group">
                                        <label>Your Message</label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Consent */}
                                <label className="consent">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        className="me-2"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        required
                                    />
                                    I confirm my friend has agreed to be contacted.
                                </label>

                                {/* Submit Button */}
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 mt-3">
                                        <div className="form-group text-center">
                                            <button type="submit" className="con-sub-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <form method="post" onSubmit={handleSubmit(SubmitForm)}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                        <label htmlFor="name" className="form-label"> Name</label>
                                                            <input type="text"  className="form-control" {...register('name', { required: true })} id='name' />
                                                            {errors.name && <p className="FormErrors">**Name is required.</p>}
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                                                            <input type="email" className="form-control" {...register('email', { required: true })} id='email'/>
                                                            {errors.email && <p className="FormErrors">**Email is required.</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                        <label htmlFor="number" className="form-label">Phone number</label>
                                                            <input type="number" className="form-control" {...register('number', { required: true })} id='number'/>
                                                            {errors.number && <p className="FormErrors">**Number is required.</p>}
                        </div>
                                                  </div>
                                                  <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                        <label htmlFor="city" className="form-label">City</label>
                                                            <input type="text" className="form-control" {...register('city', { required: true })} id='city' />
                                                            {errors.city && <p className="FormErrors">**City is required.</p>}
                        </div>
                    </div>
                                              </div>
            
                                              <div className="row">
                                                  <div className="col-md-12">
                                                  <label htmlFor="service">Type Of Service</label>
                                                      <select  id="service" className="form-control mt-1 mb-2" {...register('service', { required: true })}>
                                                          <option>Select Service</option>
                                                          <option value="Digital Marketing Company">Digital Marketing Company</option>
                                                          <option value="Web Designing Company">Web Designing Company</option>
                                                          <option value="Real Estate Consultancy Company">Real Estate Consultancy Company</option>
                                                      </select>
                                                      {errors.service && <p className="FormErrors">**Service is required.</p>}
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  
                                                  <div className="col-md-12 col-sm-12">
                                                      
                                                      <div className="form-group">
                                                          
                                                         <label htmlFor="message" className="form-label"> Message</label>
                                                            <textarea className="form-control" id="message" rows="3" {...register('message', { required: true })} ></textarea>
                                                            {errors.message && <p className="FormErrors">**Message is required.</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 mt-3">
                        <div className="form-group text-center">
                                              
             
                                                          <button type="submit" className="con-sub-btn" >Submit</button>
                        </div>
                    </div>
                </div>
                
            </form> */}

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ReferFriend