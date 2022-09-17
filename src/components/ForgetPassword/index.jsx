import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const ForgetPassword = () => {

    const [value, setValue] = useState();

    return (
        <>
            <div className="darker text-light">
                <div className="container height">
                    <form action="" className='border p-5 bg-light'>
                        <h2 className='text-center pb-3 forget-heading'>Forget Password</h2>
                        <div className="width">
                            <div className="forgetPassword">
                                <PhoneInput 
                                    className="py-5 border--"
                                    international
                                    defaultCountry="IN"
                                    value={value}
                                    onChange={setValue}
                                />
                            </div>
                            <p className="text-center">
                                <button type="submit" className='px-3 rounded-pill forgetPasswordBtn'>Send OTP</button>
                            </p>
                        </div>
                        <p className='text-center'>
                            <Link to="/index-demo-4/forgetpasswordviaemail">Forget Password via email</Link>
                        </p>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
