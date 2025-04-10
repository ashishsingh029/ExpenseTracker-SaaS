import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";
// import { getUserInfoFn } from "../apis/userApis";

export const useUserAuth = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
        console.log("User Existing");
        return;
    }
    let isMounted = true;

    // const fetchUserInfo = async () => {
    //   try {
    //     const response = await getUserInfoFn();
    //     if (isMounted && response.data) {
    //       updateUser(response.data); // also sets userFetched
    //     }
    //   } catch (error) {
    //     if (isMounted) {
    //       clearUser(); // also sets userFetched
    //       navigate("/login");
    //     }
    //   }
    // };

    // fetchUserInfo();

    return () => {
      console.log("Exiting useUserAuth Hoook");
      isMounted = false;
    };
  }, [user, navigate]);
};
