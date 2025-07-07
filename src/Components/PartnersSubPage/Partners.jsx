import React, { useState } from 'react'
import { GiGrowth } from "react-icons/gi";
import { FaStreetView } from "react-icons/fa";
import { PiTreeStructureFill } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";
import { TbLockAccess } from "react-icons/tb";
import { GiTargetArrows } from "react-icons/gi";
import { RiVoiceRecognitionLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

// import Swal from 'sweetalert2';
// import { enviromentUrl } from '../../enviroment/enviromentVariable';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

const Partners = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    setVisible(!visible);
  }
  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol class="breadcrumb">
          {/* <li class="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/product"> / Residential</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="breadcrumb-content">
                <div>
                  {/* <div className="slider">
                                <div className="slide-anim">
                                    <span className="slide slide1">Forge New Frontiers: <p></p></span>
                                    <span className="slide slide2">Where Creativity Thrives: Partner with Dekorlane to Shape the Future of Design</span>
                                    <span className="slide slide3">Transforming Visions: Partner with Dekorlane and Navigate the Future of Design</span>
                      <span className="slide slide4">Innovate, Inspire, Partner: Dekorlane Paves the Way for Design Leadership</span>
                      <span className="slide slide5">Unlock unprecedented growth in the industry </span>
                      <span className="slide slide6">Be at the forefront of next-gen innovation. </span>
                                </div >
                            </div> */}


                  <div className="fadetext">
                    <div className="item-fade1 inner-fade">
                      <h2>Forge New Frontiers</h2>
                      <h4 className='text-center ps-4'>Join Dekorlane in Redefining Interior Design Innovation.</h4>
                    </div>
                    <div className="item-fade2 inner-fade">
                      <h2>Where Creativity Thrives</h2>
                      <h4 className='text-center ps-4'>Partner with Dekorlane to Shape the Future of Design.</h4>
                    </div>
                    <div className="item-fade3 inner-fade">
                      <h2>Transforming Visions</h2>
                      <h4 className='text-center ps-4'>Partner with Dekorlane and Navigate the Future of Design.</h4>
                    </div>
                    <div className="item-fade4 inner-fade">
                      <h2>Innovate, Inspire, Partner</h2>
                      <h4 className='text-center ps-4'>Dekorlane Paves the Way for Design Leadership.</h4>
                    </div>
                    <div className="item-fade5 inner-fade">
                      <h2>Unlock unprecedented growth in the industry </h2>
                      <h4 className='text-center ps-4'>at the forefront of next-gen innovation.</h4>
                    </div>
                  </div>






                  <div className='text-center'>
                    <button type="button" className="become-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Get In Touch</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <section className='partnersCards'>
        <div className="container">
          <div className="row">
            <h2 className='mainColor mb-0'>
              Inviting Business Associates
            </h2>
            <h3 className='pt-0'> Together shaping the future of interior design! </h3>
            <p className='partnerpara mb-5'>Partner with DekorLane today and become part of a dynamic community committed to excellence, innovation, and success in the interior design market.Dekorlane offers numerous advantages and opportunities for professionals in the interior design industry. Here's why you should consider partnering with us:</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <div class="book">
                <h5>
                  Dekorlane adopts a forward-thinking and innovative approach to interior design, leveraging cutting-edge technologies such as the metaverse to create immersive and transformative experiences for clients.
                </h5>
                <div class="cover">
                  <div className='text-center'><GiTargetArrows /> <h3>

                    Innovative Approach
                  </h3></div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Partners with Dekorlane gain access to a wealth of resources, including state-of-the-art technology, extensive design libraries, and expert guidance from seasoned professionals in the field
                </h5>
                <div class="cover">
                  <div className='text-center'><TbLockAccess /> <h3>
                    Access to Resources
                  </h3></div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Partnering with Dekorlane enhances your professional reputation and visibility within the industry. As part of our network, you benefit from the recognition and branding associated with a leading interior design firm.
                </h5>
                <div class="cover">
                  <div className='text-center'><RiVoiceRecognitionLine /> <h3>
                    Recognition and Branding
                  </h3></div>

                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Dekorlane is committed to the professional growth and development of its partners. We provide comprehensive training programs, mentorship opportunities, and access to advanced skills development resources to help you excel in your career.
                </h5>
                <div class="cover">
                  <div className='text-center'><MdModelTraining /> <h3>
                    Training and Development
                  </h3></div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Dekorlane offers a competitive commission structure that rewards partners for their contributions and performance. Our partners enjoy attractive commission rates and incentives for successful project completion and client satisfaction.
                </h5>
                <div class="cover">
                  <div className='text-center'><PiTreeStructureFill /> <h3>
                    Lucrative Commission Structure
                  </h3></div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Partnering with Dekorlane means joining a collaborative and supportive community of like-minded professionals. Our team-oriented approach fosters collaboration, creativity, and mutual success among partners
                </h5>
                <div class="cover">
                  <div className='text-center'><FaStreetView /><h3>
                    Collaborative Environment
                  </h3></div>

                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div class="book">
                <h5>
                  With Dekorlane, partners have the opportunity to grow and expand their businesses. Whether you're looking to increase your client base, diversify your portfolio, or expand into new markets, Dekorlane provides the support and resources you need to achieve your goals.
                </h5>
                <div class="cover">
                  <div className='text-center'><GiGrowth /> <h3>
                    Opportunities for Growth
                  </h3></div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="book">
                <h5>
                  Dekorlane adopts a forward-thinking and innovative approach to interior design, leveraging cutting-edge technologies such as the metaverse to create immersive and transformative experiences for clients.
                </h5>
                <div class="cover">
                  <div className='text-center'><GiTargetArrows /><h3>
                    Innovative Approach
                  </h3></div>

                </div>
              </div>
            </div>
          </div>
          <p className='partnerpara mb-5'>In summary, partnering with Dekorlane opens doors to new opportunities, enhances your professional reputation, and positions you for success in the dynamic and evolving field of interior design.</p>

          <div className="touchBtn text-center">
            <button className="become-btn mt-0 black" type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">Get In Touch</button>
          </div>
        </div>



        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Get In Tach Now</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><IoMdClose /></button>
              </div>
              <div className="modal-body">
                <form method="post" >
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label"> Name</label>
                        <input type="text" className="form-control" />


                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
        <div className="col-md-6 col-sm-12">
			<div className="form-group">
			<label htmlFor="number" className="form-label">Phone number</label>
      <input type="text"  className="form-control"/>  
			</div>
        </div>
                                  </div> */}

                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="service" className="form-label">Subject</label>
                      <input type="text" className="form-control" />

                    </div>
                  </div>
                  <div className="row">

                    <div className="col-md-12 col-sm-12">

                      <div className="form-group">

                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea type="text" className="form-control"></textarea>

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
      </section>


    </>
  )
}

export default Partners