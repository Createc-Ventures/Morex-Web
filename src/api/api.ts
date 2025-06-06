const BASE_URL = "http://13.201.171.33:8000";

/**
 * Sends OTP to the provided email address.
 * @param email - User's email address
 * @returns Response data from the API
 */
export const sendOtp = async (email: string) => {
  const formData = new URLSearchParams();
  formData.append("email", email);

  const res = await fetch(`${BASE_URL}/v1/otp/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!res.ok) {
    throw new Error("Failed to send OTP");
  }

  const data = await res.json();
  return data;
};

/**
 * Verifies the OTP for a given email.
 * @param email - User's email address
 * @param otp - OTP entered by the user
 * @returns Response data from the API
 */
export const verifyOtp = async (email: string, otp: string) => {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("otp", otp);

  const res = await fetch(`${BASE_URL}/v1/otp/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!res.ok) {
    throw new Error("Failed to verify OTP");
  }

  const data = await res.json();
  return data;
};
