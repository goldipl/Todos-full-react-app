import { useMutation } from "react-query";

import { useAuth } from "../providers/AuthProvider";

import api from "../utilites/api";

async function loginUser({ email, password }) {
  return api.post("v1/auth/login", { password, email });
}

function useLogin() {
  const { setAuth } = useAuth();

  return useMutation(loginUser, {
    onError: (err) => console.log(err),
    onSuccess: (response) => {
      setAuth(response.data);
    },
  });
}

export { loginUser, useLogin };
4;
