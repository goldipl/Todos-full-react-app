import { useMutation } from "react-query";
// zdefiniowac funkcje postujaca dane do serwera

import api from "../utilites/api";

async function registerUser({ username, password, email }) {
  return api.post("v1/auth/register", { username, password, email });
}

// zdefiniowac hooka useRegister
function useRegister() {
  return useMutation(registerUser, {
    onError: (err) => console.log(err),
    onSuccess: (data) => console.log(data),
  });
}

export { registerUser, useRegister };
