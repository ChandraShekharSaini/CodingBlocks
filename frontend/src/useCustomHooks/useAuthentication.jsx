const useAuthentication = () => {
  const baseUrlDev = "http://localhost:3400";
  const baseUrlProd = "https://codingbloacks-backend.vercel.app";

  const handleGoogleAuth = () => {
    window.location = `${baseUrlProd}/auth/google`;
  };

  const handleGithubAuth = () => {
    window.location = `${baseUrlProd}/auth/github`;
  };

  return { handleGithubAuth, handleGoogleAuth };
};

export default useAuthentication