import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import ExpirationAlert from "../ExpirationAlert/ExpirationAlert";


const Main = ({ page }: { page: string }) => {
  const router = page.charAt(0).toUpperCase() + page.slice(1);
  const ComponentToRender = React.lazy(() => import(`./${router}/${router}`));
  return (
    <>
   {page === "userProfile" ? <UserProfile /> : <ComponentToRender />}
    <ExpirationAlert />
    </>
  );
};

export default Main;
