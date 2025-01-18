import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from 'axios'
import api from "../services/api";

export function VerifyEmail({ email, handleVerifyEmailAndSentOTP, handleEmailChange, setFormState }) {

    // async function handleVerifyEmailAndSentOTP(e) {
    //   e.preventDefault()
    //   console.log(email)

    //   try {
    //     const response = await axios.post('/api/forgot-password/send-otp', { email })
    //     console.log(response)
    //     if (response.status == 200) { setFormState("verifyOTP") }
    //     if (response.error) {
    //       console.log(response.error.data)
    //     }
    //   } catch (error) {
    //     console.log(error.response)
    //   }
    // }

    return (

        <form onSubmit={(e) => handleVerifyEmailAndSentOTP(e)}>
            <div className="flex flex-col items-center justify-center px-24 pt-60">
                <h1 className="font-semibold text-5xl">Forgot Password?</h1>
                <p className="pt-12 font-semibold text-gray-500">
                    No worries, we'll reset your password and help you create a
                    new one.
                </p>

                <div className="w-full max-w-lg pt-12 text-gray-400">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="w-full max-w-lg pt-6">

                    <Button
                        type="submit"
                        variant="solid"
                        color="success"
                        className="w-full h-12 text-medium text-white font-semibold"
                        size="md"
                        radius="sm"
                        style={{ width: "calc(100%)" }}
                    >
                        Reset Password
                    </Button>
                </div>

                <div className="pt-10">
                    <Link to="/login" className="block-w-full">
                        <h3 className="font-medium text-slate-400">← Back to login</h3>
                    </Link>
                </div>
            </div>
        </form>
    );
}


export function VerifyOTP({ email, otp, handleVerifyEmailAndSentOTP, handleOTPChange, setFormState }) {

    async function handleVerifyOTP(e) {
        e.preventDefault()
        console.log("VERIFYOTP", email, otp)
        try {
            const response = await api.post('user/forgotpassword/verifyotp', { email, otp })
            //loading
            if (response.status == 200) { setFormState("passwordReset") }
            console.log(response)
            if (response.error) {
                console.log(response.error.data)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    function handleResendOTP(e) {
        handleVerifyEmailAndSentOTP(e)
    }

    return (
        <form onSubmit={handleVerifyOTP}>
            <div className="flex flex-col items-center justify-center px-24 pt-60">
                <h1 className="font-semibold text-5xl">Check your email?</h1>
                <p className="pt-12 font-semibold text-gray-500">
                    Enter the OTP sent to your inbox.
                </p>
                <div className="w-full max-w-md pt-6">
                    <Input required type="number" label="Enter OTP" name="otp" onChange={handleOTPChange} />
                </div>
                <div className="w-full max-w-md pt-4">
                    <Button
                        type="submit"
                        variant="solid"
                        color="success"
                        className="w-full h-12  text-medium text-white font-semibold"
                        size="md"
                        radius="sm"
                        style={{ width: "calc(100%)" }}
                    >
                        Proceed
                    </Button>
                </div>
                <div className="pt-10">
                    <Link to="/login" className="block-w-full">
                        <p className="font-medium text-black-600">
                            Didn't receive the email?
                        </p>
                        <p className="font-medium text-purple-600" onClick={handleResendOTP}>Click to resend</p>
                    </Link>
                </div>
                <div className="pt-10">
                    <Link to="/login" className="block-w-full">
                        <h3 className="font-medium text-slate-400">← Back to Login</h3>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export function PasswordReset({ email, setFormState }) {
    const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" });

    function handlePasswordChange(e) {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    }

    async function handlePasswordReset(e) {
        e.preventDefault();
        console.log("PASSWORD RESET", email, passwords);

        if (passwords.newPassword !== passwords.confirmPassword) {
            console.log("Passwords do not match");
            // Add toast notification for user feedback
            return;
        }

        try {
            console.log({
                email,
                newPassword: passwords.newPassword,
                confirmPassword: passwords.confirmPassword
            })
            const response = await api.post("user/forgotpassword/resetpassword", {
                email,
                newPassword: passwords.newPassword,
                confirmPassword: passwords.confirmPassword
            });
            console.log(response);
            if (response.status === 200) {
                setFormState("resetSuccessful");
            }
        } catch (error) {
            console.error(error.response || error);
            // Add toast notification or error handling logic
        }
    }

    return (
        <form onSubmit={handlePasswordReset}>
            <div className="flex flex-col items-center justify-center px-24 pt-60">
                <h1 className="font-semibold text-5xl">Set New Password</h1>
                <p className="pt-12 font-semibold text-gray-500">
                    Your new password must be different from previously used passwords.
                </p>
                <div className="w-full max-w-md pt-4 text-gray-400">
                    <Input
                        name="Email"
                        value={email}
                        onChange={handlePasswordChange}
                        required
                        type="password"
                        label="Email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="w-full max-w-md pt-4 text-gray-400">
                    <Input
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handlePasswordChange}
                        required
                        type="password"
                        label="New Password"
                        placeholder="Enter new password"
                    />
                </div>
                <div className="w-full max-w-md pt-4 text-gray-400">
                    <Input
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                        type="password"
                        label="Confirm Password"
                        placeholder="Re-enter new password"
                    />
                </div>
                <div className="w-full max-w-md pt-6">
                    <Button
                        type="submit"
                        variant="solid"
                        color="success"
                        className="w-full h-12 text-medium text-white font-semibold"
                        size="md"
                        radius="sm"
                    >
                        Reset Password
                    </Button>
                </div>
                <div className="pt-10">
                    <Link to="/login" className="block-w-full">
                        <h3 className="font-medium text-slate-400">← Back to Login</h3>
                    </Link>
                </div>
            </div>
        </form>
    );
}
export function ResetSuccessful() {
    return (
        <div className="flex flex-col items-center justify-center px-24 pt-60">
            <h1 className="font-semibold text-5xl">Password Reset Successfully!</h1>
            <div className="pt-10">
                <Link to="/login" className="block-w-full">
                    <Button
                        // onClick={(e) => { e.preventDefault() }}
                        variant="solid"
                        color="primary"
                        className="font-medium text-slate-400"
                    >
                        ← Back to Login
                    </Button>
                </Link>
            </div>
        </div>
    );
}