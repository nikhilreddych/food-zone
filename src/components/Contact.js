import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Contact Us!!</h1>
      <input
        type="text"
        id="userName"
        className="h-8 w-56 border-1 border-gray-400 m-2 p-2 shadow-lg rounded-md"
        value={user.name}
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }}></input>
      <input
        type="text"
        id="userMail"
        className="h-8 w-56 border-1 border-gray-400 m-2 p-2 shadow-lg rounded-md"
        value={user.email}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}></input>
    </>
  );
};

export default Contact;
