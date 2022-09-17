import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const SignUpData = [
        {
            id: 1,
            divClassName: "user-name position-relative",
            inputType: "text",
            inputName: "name",
            inputId: "name",
            inputPlaceHolder: "User Name",
            inputClassName: "border rounded border-secondary px-3 py-2 mb-4 fw-bold",
        },
        {
            id: 2,
            divClassName: "user-email position-relative",
            inputType: "email",
            inputName: "email",
            inputId: "email",
            inputPlaceHolder: "User Email",
            inputClassName: "border rounded border-secondary px-3 py-2 mb-4 fw-bold",
        },
        {
            id: 3,
            divClassName: "user-mobileNo position-relative",
            inputType: "tel",
            inputName: "mobileNo",
            inputId: "mobileNo",
            inputPlaceHolder: "Mobile no.",
            inputClassName: "border rounded border-secondary px-3 py-2 mb-4 fw-bold",
        },
        {
            id: 4,
            divClassName: "user-password position-relative",
            inputType: "password",
            inputName: "password",
            inputId: "password",
            inputPlaceHolder: "User Password",
            inputClassName: "border rounded border-secondary px-3 py-2 mb-4 fw-bold",
        },
        {
            id: 5,
            divClassName: "user-confirmPassword position-relative",
            inputType: "password",
            inputName: "confirmPassword",
            inputId: "confirmPassword",
            inputPlaceHolder: "Confirm Password",
            inputClassName: "border rounded border-secondary px-3 py-2 mb-4 fw-bold",
        },
    ]

    return (
        <>
            <div className="darker text-light">
                <div className="container height">
                    <form action="" className='border bg-light p-5'>
                        <h2 className='text-center pb-3 sign-up-heading'>Sign Up</h2>
                        <div className='width'>
                            {
                                SignUpData.map((element) => {
                                    return <div key={element.id}>
                                        <div className={element.divClassName}>
                                            <input type={element.inputType} name={element.inputName} id={element.inputId} placeholder={element.inputPlaceHolder} className={element.inputClassName} autoComplete="off" />
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className='text-center py-3'>
                            <button type="submit"className="px-4 my-2 rounded-pill sign-up-btn">Sign Up</button>
                            <p className='pt-4 text-secondary'>Have An Account? <Link to="/index-demo-4/signin">Sign In</Link></p>
                        </div>
                    </form>
                </div>                
            </div>
        </>
    )
}

export default SignUp
