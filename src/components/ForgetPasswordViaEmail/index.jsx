import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPasswordViaEmail = () => {
    return (
        <>
            <div className="darker text-light">
                <div className="container height">
                    <form action="" className='border p-5 bg-white'>
                        <h2 className='text-center pb-3 forget-email-heading'>Forget Password</h2>
                        <div className="width">
                            <div className="email pb-4">
                                <input type="email" name="email" id="email" className='border px-3 py-2' placeholder='Enter your Email' />
                            </div>
                            <div className='text-center pt-3'>
                                <button type="submit" className='px-3 rounded-pill forgetViaEmailBtn'>Send Email</button>
                            </div>
                            <p className='text-center mt-2'>
                                <Link to="/index-demo-4/forgetpassword">Forget Password via Mobile number</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPasswordViaEmail
