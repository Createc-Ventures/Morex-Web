interface ValidateOtpResponse {
  success: boolean;
  message?: string;
}

const BASE_URL = "http://13.201.171.33:8000";

export const validateOtp = async (email: string, otp: string): Promise<ValidateOtpResponse> => {
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
    throw new Error("Failed to validate OTP");
  }

  const result: ValidateOtpResponse = await res.json();
  return result;
};
