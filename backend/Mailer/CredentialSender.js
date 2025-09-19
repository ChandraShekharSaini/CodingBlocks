import axios from "axios";

const CredentialSender = async (email, userName, password) => {
  try {
    if (!email || typeof email !== "string" || !email.includes("@")) {
      throw new Error("Invalid email address");
    }

    console.log("----- Sending User Credentials Email (Coding Blocks) -----");
    console.log("Sending to:", email);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Coding Blocks",
          email: "chandrashekharsaini322@gmail.com", // must be verified in Brevo
        },
        to: [{ email: email }],
        subject: "Your Account Credentials - Coding Blocks",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #EF4036;">Welcome to Coding Blocks 🎉</h2>
            <p>Hello,</p>
            <p>Your account has been successfully created. Here are your login details:</p>
            <div style="font-size: 18px; margin: 15px 0;">
              <strong>Username:</strong> <span style="color:#EF4036;">${userName}</span><br/>
              <strong>Email:</strong> <span style="color:#EF4036;">${email}</span><br/>
              <strong>Password:</strong> <span style="color:#EF4036;">${password}</span>
            </div>
            <p>⚠️ Please change your password after your first login for security reasons.</p>
            <p>You can now log in and start exploring our services.</p>
            <p>If you did not request this account, please ignore this email.</p>
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

    console.log("User credentials email sent:", response.data);
  } catch (error) {
    console.error("Error sending user credentials email:");
    if (error.response) {
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("No response. Request details:", error.request);
    } else {
      console.error("General error:", error.message);
    }
  }
};

export default CredentialSender;
