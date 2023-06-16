import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const AuthContext = createContext(); // Context 생성

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const router = useRouter();

  // useEffect(() => {
  //   const getToken = localStorage.getItem("authTokens");
  //   if (getToken) {
  //     setAuthTokens(JSON.parse(getToken));
  //     setUser(jwt_decode(JSON.parse(getToken).access));
  //   }
  //   setLoading(false);
  // }, []);

  const loginUser = async (username, password) => {
    const response = await fetch("http://localhost:8000/rest-auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();

    // 로그인에 성공했을 경우 홈으로 이동
    if (response.status === 200) {
      // setAuthTokens(data);
      console.log(data['token'])
      console.log(jwt_decode(data['token'])) // 
      setUser(jwt_decode(data['token'])); // user정보는 여기 담김
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/");
    } else {
      alert("Something went wrong!");
    }
  };

  const registerUser = async (username, email, password1, password2) => {
    const response = await fetch("http://localhost:8000/rest-auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password1,
        password2,
      }),
    });
    if (response.status === 201) {
      router.push("/login");
    } else {
      alert("Something went wrong!");
      const data = await response.json();
      console.log(data)
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
