import User from "../model/userSchema.js";
import { randomUserNameGenerator1 } from "../utils/randomUserNameGenerator.js";
import { randomPasswordGenerator } from "../utils/randomPasswordGenerator.js";
import CredentialSender from "../Mailer/CredentialSender.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);

  try {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(200).json({
        status: false,
        message: "User Already Exist",
      });
    }

    const randomName = randomUserNameGenerator1(email);
    const randomPassword = randomPasswordGenerator();

  await  CredentialSender(email, randomName, randomPassword);

    console.log(randomPassword);
   

    const hashPassword = bcrypt.hashSync(randomPassword, 10);

    console.log(hashPassword);

    const newUser = new User({
      email,
      userName: randomName,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(200).json({
      status: true,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Handling",
    });
  }
};

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(typeof username);
  console.log(typeof password);

  try {
    const existedUser = await User.findOne({ userName: username });

    console.log(existedUser);

    if (!existedUser) {
      return res.status(404).json({
        status: false,
        message: "User Not Prsent",
      });
    }

    const passwordValidate = bcrypt.compareSync(password, existedUser.password);
    console.log("HHH", passwordValidate);

    if (!passwordValidate) {
      return res.status(401).json({
        status: false,
        message: "Wrong Credentials",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Login Successfully",
      user: existedUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Handling",
    });
  }
};
