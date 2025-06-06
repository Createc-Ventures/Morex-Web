interface OtpResponse {
  success: boolean;
  message?: string;
}

export async function sendOtp(email: string): Promise<OtpResponse> {
  try {
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('sendOtp error:', error);
    return { success: false, message: error.message || 'Unknown error' };
  }
}
