import { USER_LOGIN, USER_SIGNUP } from "@/graphql/schema/User";
import { useMutation } from "@vue/apollo-composable";
import { useToast } from "vue-toastification";
import { useAuthStore } from "@/store/auth";
import router from "@/router";

export const Login = (email: string, password: string): any => {
  const { mutate: login } = useMutation(USER_LOGIN);
  const toast = useToast();
  login({
    email,
    password,
  })
    .then((user) => {
      if (user) {
        const auth = useAuthStore();
        const token = user.data.login.accessToken;

        localStorage.setItem("token", token);
        auth.login(token);

        toast.success("Bienvenue !");
      }
    })
    .then(() => {
      router.push("profile");
    })
    .catch((e) => {
      toast.error(e.message);
    });
};

export const Register = (
  email: string,
  nickname: string,
  birthdate: string,
  password: string
): any => {
  const { mutate: signup } = useMutation(USER_SIGNUP);
  const toast = useToast();
  signup({
    email,
    nickname,
    birthdate,
    password,
  })
    .then((user) => {
      if (user) {
        const auth = useAuthStore();
        const token = user.data.signup.accessToken;

        localStorage.setItem("token", token);
        auth.login(token);

        toast.success(
          "Vous êtes désormais inscrit à notre plateforme, félicitation !"
        );
        console.log(user.data.signup.accessToken);
      }
    })
    .then(() => {
      router.push("profile");
    })
    .catch((e) => {
      toast.error(e.message);
    });
};
