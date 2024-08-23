import { useState, useRef } from "react";

export function OtpGenerator() {
    const [otpSent, setOtpSent] = useState(false);
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [generatedOtp, setGeneratedOtp] = useState("");

    const inputRefs = useRef([]);

    function generateOtp() {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(newOtp);
        setOtpSent(true);
        console.log("Generated OTP:", newOtp);
    }

    function handleChange(value, index) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== "" && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    function verifyOtp() {
        if (otp.join("") === generatedOtp) {
            alert("OTP Verified Successfully!");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {!otpSent ? (
                <div>
                    <div className="flex flex-col items-center">
                        <input
                            className="rounded-lg p-2 shadow shadow-slate-900"
                            type="tel"
                            value={mobile}
                            placeholder="Enter Mobile Number"
                            onChange={(e) => setMobile(e.target.value)}
                            maxLength={10}
                        />
                        <button
                            className="bg-red-500 p-2 rounded-lg m-5"
                            type="button"
                            onClick={generateOtp}
                            disabled={mobile.length !== 10}
                        >
                            Generate OTP
                        </button>
                    </div>
                </div>
            ) : (
                <div className="m-10 w-80 h-80 bg-gray-500 flex flex-col items-center justify-center">
                    <div className="w-20 h-10 font-bold">Verify OTP</div>
                    <div className="flex justify-evenly items-center mt-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="w-10 h-10 m-1 rounded-lg p-2 shadow shadow-slate-900 text-center"
                                type="tel"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                            />
                        ))}
                    </div>
                    <button
                        className="bg-green-500 p-2 rounded-lg mt-5"
                        type="button"
                        onClick={verifyOtp}
                    >
                        Verify OTP
                    </button>
                </div>
            )}
        </div>
    );
}
