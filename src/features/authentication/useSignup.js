import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSucces: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address!"
      );
    },
    onError: (err) =>
      toast.error(err.message || "An error occured during the registration!"),
  });

  return { signup, isLoading };
}
