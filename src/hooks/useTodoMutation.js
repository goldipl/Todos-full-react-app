import { useMutation, useQueryClient } from "react-query";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../providers/AuthProvider";
import api from "../utilites/api";
import ROUTES from "../constants/routes";

async function postTodo(data, auth) {
  return api.post("v1/todos", data, {
    headers: {
      Authorization: `Bearer ${auth.access_token}`,
    },
  });
}

function useTodoMutation() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const { auth } = useAuth();

  return useMutation((data) => postTodo(data, auth), {
    onError: (err) => console.log(err),
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos").then(() => {
        navigation.navigate(ROUTES.HOME.DASHBOARD);
      });
    },
  });
}

export { postTodo, useTodoMutation };
