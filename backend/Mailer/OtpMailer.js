import axios from "axios";

const OtpMailer = async (email, otp) => {
  try {
    if (!email || typeof email !== 'string' || !email.includes("@")) {
      throw new Error("Invalid email address");
    }

    console.log("----- Sending OTP Email (Coding Blocks) -----");
    console.log("Sending OTP to:", email);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Coding Blocks",
          email: "chandrashekharsaini322@gmail.com", // must be verified in Brevo
        },
        to: [{ email: email }],  // explicitly write `email: email`
        subject: "Your OTP Code - Coding Blocks",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #EF4036;">Your One-Time Password (OTP)</h2>
            <p>Hello,</p>
            <p>Your OTP for accessing Coding Blocks services is:</p>
            <div style="font-size: 28px; font-weight: bold; color: #EF4036; margin: 20px 0;">
              ${otp}
            </div>
            <p>This OTP is valid for 5 minutes. Please do not share it with anyone.</p>
            <p>If you did not request this OTP, you can safely ignore this email.</p>
            <br/>
            <p>Regards,<br/><strong>The Coding Blocks Team</strong></p>
            <img src="https://minio.codingblocks.com/public/cb/cb_logo_new.svg" alt="Coding Blocks" width="150"/>
          </div>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    console.log("OTP email sent:", response.data);
  } catch (error) {
    console.error("Error sending OTP email:");
    if (error.response) {
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("No response. Request details:", error.request);
    } else {
      console.error("General error:", error.message);
    }
  }
};

export default OtpMailer;
