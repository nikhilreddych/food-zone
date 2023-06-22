import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProfileFunctionalComponent = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUser();

    const timer = setInterval(() => {
      console.log("food zone demo from profile");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchUser = async () => {
    const json = await useFetch("http://localhost:3000/getUserInfo");

    setUserInfo(json);
  };

  return (
    <div>
      <h2>Profile Functional component</h2>
      <p>Name: {userInfo.login}</p>
      <p>No. Of repos: {userInfo.public_repos}</p>
      <img src={userInfo.avatar_url}></img>
    </div>
  );
};

export default ProfileFunctionalComponent;
