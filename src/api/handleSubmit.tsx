import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendOtp, verifyOtp } from "@/api/api";  // <-- changed here

const YourComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    try {
      // Step 1: Send OTP
      const otpResponse = await sendOtp(formData.email);
      if (!otpResponse.success) {
        alert("Failed to send OTP: " + (otpResponse.message || "Unknown error"));
        return;
      }

      // Step 2: Prompt user for OTP
      const enteredOtp = prompt("An OTP was sent to your email. Please enter it to verify:");
      if (!enteredOtp) {
        alert("OTP is required to continue.");
        return;
      }

      // Step 3: Verify OTP (changed function name here)
      const verifyResponse = await verifyOtp(formData.email, enteredOtp);
      if (!verifyResponse.success) {
        alert("Invalid OTP. Please try again.");
        return;
      }

      // Step 4: Submit form
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        alert("Error: " + result.error);
      }
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields here */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={(token) => setCaptchaToken(token)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
