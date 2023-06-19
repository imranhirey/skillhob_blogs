import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "@layouts/partials/Header";
import Footer from "@layouts/partials/Footer";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
    console.log(isAuthenticated);
        console.log(isLoading);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>

    <Header/>
<h1>
    hello {user.name} now you can post blogs at skillhob using your email {user.email}
</h1>
    <Footer/>
    
    </>
  )
}
  

export default Profile;