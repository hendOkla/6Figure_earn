import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import swal from 'sweetalert';
import axios from 'axios';


export default function ServicesPay() {
    const router = useRouter();
    const { query } = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] =  useState(false);
    const sessionId = decodeURIComponent(query.session_id);
    const showStatus = decodeURIComponent(query.status);

    useEffect(() => {
      const username = localStorage.getItem('username');
      const link = localStorage.getItem('link');
      const storedEmail = localStorage.getItem('email');
      const attendedBy = localStorage.getItem('attendedBy');      
      const password = localStorage.getItem('password');  
      const sendEmail = localStorage.getItem('email');

      const amount= localStorage.getItem('amount');
      const plan = localStorage.getItem('plan');


 




      if (storedEmail) {
        setEmail(storedEmail);
      }  
      
      if(!username){
        router.push('/sign-up/');
      }else{
       
        const query = new URLSearchParams(router.asPath.split('?')[1]);
        if (query.get('success')) {

          try {
            const data = {
              username: username,
              attendedBy: attendedBy,
              amount: amount,
              paymentPlan: plan,
              email: sendEmail,
              password: password
            };

            const mailData = {
              username:username,
              email:sendEmail,
              link: link,
              password: password,                  
            }


            axios.post(`/api/payment`,data).then(res=>{
              if(res.data.status ===200){                
                //send mail for user registered
 
                fetch('/api/send-email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ mailData }),
                })
                  .then(response => response.json())
                  .then(data => {
                    if (data.status===200) {
                      axios.post(`/api/updateCustomStatus/${username}`).then(ress=>{
                        if(ress.status ===200){
                              //get user who attended by he
                            axios.get(`/api/getCEmail/${attendedBy}`,data).then(resEmail=>{
                              if(resEmail.data.email){
  
                                //send mail for user registered
                                const reMailData = {
                                  username:attendedBy,
                                  email:resEmail.data.email,
                                  newUser:username                                            
                                }
  
                                fetch('/api/receive-email', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({ reMailData }),
                                })
                                  .then(responseMail => responseMail.json())
                                  .then(data => {
                                    if (data.status===200) {                       
                                      swal("Success",`Ready to show videos,Please check your mail......`,"success");  
                                      router.push('/'); 
                                    } else {
                                      swal("Error",`an error occurred. If you are sure that the payment has been completed, please submit the issue and our support team will contact you`,"error"); 
                                    }
                                }); 
                              }
  
                            });
                        }else{
                          swal("Error",res.data.error,"error");
                        }
                      }); 
                    } else {

                      console.log(mailData);
                      swal("Error",`an error occurred. If you are sure that the payment has been completed, please submit the issue and our support team will contact you`,"error"); 
                    }
                });
  
  
              }else if(res.data.status === 400){
                  swal("Failed",'Something went wrong, please contact support to resolve the issue...',"warning");                    
              } 
            }); 
            
          } catch (error) {
            swal("Error",`Something went wrong, please contact our support team`,"error"); 
          }
          
        }
    
        if (query.get('canceled')) {
          swal("Error",`Order canceled -- continue to shop around and checkout when you’re ready.`,"error"); 
        }

      }
    }, [showStatus]);


    const handleButtonClick = async (e,productName,description,value) => {
      e.preventDefault();
      
      localStorage.setItem('amount',value);

      axios.defaults.baseURL = 'https://www.6figure-earner.world/';


      const paymentData ={
        ProductName: productName,
        Description:description,
        price:value
      }

      
      setLoading(true)
      try {
        const data = await axios.post('/api/init', { paymentData: paymentData })
        setLoading(false)
        /* window.open(data.data.hosted_url, '_blank'); */
        window.location.href = data.data.hosted_url;
      } catch (e) {
        console.error(e)
        setLoading(false)
      }



    };

  return (
    
    <>
      <div>
        <section>
          <input type="email" name="email" value={email} readOnly hidden />
          <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
              <div className="section-title">
                <h2>Our special packages</h2>
                <div className="bar"></div>
                <p>
                  You can choose the package that suits you and enjoy the experience
                  with us
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Standard</h3>
                    </div>
                    <div className="price">
                      <span>
                        <sup>$</sup>350.00{' '}
                      </span>
                    </div>
                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={(e) => handleButtonClick(e,"Standard","Standard service online courses","350")} className="btn btn-primary" type="submit" name="amount" value="350" role="link" >Standard </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Pro</h3>
                    </div>
                    <div className="price">
                      <span>
                        <sup>$</sup>600.00{' '}
                      </span>
                    </div>
                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={(e) => handleButtonClick(e,"Pro","Pro service online courses","600")} className="btn btn-primary" type="submit" name="amount"value ="600" role="link" >Pro</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>  
    </>
  );
}
