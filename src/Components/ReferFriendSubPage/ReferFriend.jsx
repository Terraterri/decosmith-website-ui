import React from 'react'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";



const ReferFriend = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  return (
      <>
          <nav aria-label="breadcrumb mt-5 mb-5"><ol class="breadcrumb"></ol></nav>
      <section className='referFriend'>
        <div className="container">
        <h1 className='mainTitle text-center mb-4'><span className='pe-3'>Refer</span>a Friend</h1>
                  <div className="row justify-center align-items-center">
                      <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className='underLineContact'><span className='pe-3 mainColor'>Refer</span>a Friend:</h2>       
          <p className='furni-p mb-3 fs-5'>The <span className='spanTitle '>DekorLane</span> referral program is a way for current or former <span className='spanTitle '>DekorLane</span> customers to refer friends or family members to <span className='spanTitle '>DekorLane</span> for their home interiors and earn rewards for successful referrals. Here's how it works:</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                          <img src="assets/images/work/ReferFriend.jpg" alt="" className='referimg' />
                      </div>
       </div>
           
          
         
         
              </div>
              
          </section> 
          <section className='referFriend2'>
              <div className="container">
                  <h2 className='text-center'>How it <span className='mainColor'>works</span></h2>
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="referCard border-r1">
                              <div className='icon'>
                              <BsFillPersonPlusFill />

                              </div>
                              <h3>Referral Reward</h3>
                              <p className=''>For each successful referral, the referrer earns ₹25,000.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="referCard">
                              <div className='icon'>
                              <RiUserStarFill />

                              </div>
                              <h3>Eligibility</h3>
                              <p className=''>To be eligible for the referral program, the friends you refer must get their home interiors done by DekorLane, with a minimum project value of ₹3 lakh.</p>
                      </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard border-r">
                              <div className='icon'>
                              <VscServerProcess />

                              </div>
                              <h3>Referral Process</h3>
                              <p className=''>To refer someone, the referrer fills out a form at DekorLane office with their own and their friend's details (name, phone number, and email ID). 
   - ₹25,000 is rewarded when the referred friend finalizes the order with DekorLane with 25% payment.
</p>
                      </div></div>
                      </div>
                      <div className="row mt-50 mb-50">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 "> <div className="referCard border-r1">
                              <div className='icon'>
                              <IoMdContacts />


                              </div>
                              <h3>Number of Referrals</h3>
                              <p className=''>There is no limit to the number of friends a referrer can refer.</p>
                          </div></div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard">
                              <div className='icon'>
                              <FaCcAmazonPay />


                              </div>
                              <h3>Payouts</h3>
                              <p className=''>Payouts are made via bank transfers. They are processed between the 15th and 20th of each month. </p>
                          </div></div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div className="referCard border-r">
                              <div className='icon'>
                              <SiContactlesspayment />


                              </div>
                              <h3>Payout Issues</h3>
                              <p className=''>If a referrer hasn't received their referral payouts despite eligibility and a successful referral, they can contact DekorLane customer support at care@DekorLane.com for assistance.</p>
                      </div></div>
                      
                      {/* <div class="card_box">
        <span></span>
    </div> */}
                  </div>
                  <div className="row  text-center  Furnishing-lastText">
          
          <h3> Overall, the <span className='spanTitle'>DekorLane</span> referral program incentivizes anyone to refer their friends and family to <span className='spanTitle'>DekorLane</span> for home interior projects and rewards them for successful referrals.</h3>
      </div>  
              </div>
          </section>
      </>
  )
}

export default ReferFriend