import  { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
const useLoggedinuser = () => {
  const { user } = useUserAuth();
  const email = user?.email;
  const [loggedinuser, setloggedinuser] = useState({});

  useEffect(() => {
    fetch(`https://xcom-server.vercel.app/loggedinuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setloggedinuser(data);
      });
  }, [email, loggedinuser]);
  return [loggedinuser, setloggedinuser];
};

export default useLoggedinuser;
