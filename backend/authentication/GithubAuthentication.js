import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";
import User from '../model/user.model.js'
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
          emails: profile.emails[0].value,
        });

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
        return done(err, null);
      }
    }
  )
);

export default passport;
