import { useQuery } from "react-query";

import { useAuth } from "../providers/AuthProvider";
import api from "../utilites/api";

async function getTodos(auth) {
  return api
    .get("v1/todos", {
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
      },
    })
    .then((response) => response.data);
}

function useTodos() {
  const { auth } = useAuth();

  return useQuery("todos", () => getTodos(auth), {
    placeholderData: [],
  });
}

export { getTodos, useTodos };
