import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";
import User from '../model/mentorSchema.js'
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {

      console.log(profile.id);
      try {

        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });

        console.log(existingUser);

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          github: {
            githubId: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
            picture: profile.photos?.[0]?.value,
          },
        });

        return done(null, newUser);
      } catch (err) {
        console.log("===================err===========================");
        return done(err, null);

      }
    }
  )
);

export default passport;
