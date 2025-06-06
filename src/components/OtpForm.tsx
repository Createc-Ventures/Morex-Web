import React, { useState } from "react";

const BASE_URL = "http://13.201.171.33:8000";

const OtpForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      const res = await fetch(`${BASE_URL}/v1/otp/email`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!res.ok) throw new Error("Failed to send OTP");

      const data = await res.json();
      setMessage(data.message || "OTP Sent");
      setOtpSent(true);
    } catch {
      setMessage("Error sending OTP. Please try again.");
    }
  };

  const validateOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("otp", otp);

      const res = await fetch(`${BASE_URL}/v1/otp/validate`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!res.ok) throw new Error("Failed to validate OTP");

      const data = await res.json();
      setMessage(data.message || "OTP Validated");
    } catch {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">OTP Verification</h2>

      <form onSubmit={sendOtp} className="mb-4 space-y-2">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Send OTP
        </button>
      </form>

      {otpSent && (
        <form onSubmit={validateOtp} className="space-y-2">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button className="w-full bg-green-500 text-white p-2 rounded" type="submit">
            Validate OTP
          </button>
        </form>
      )}

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default OtpForm;
