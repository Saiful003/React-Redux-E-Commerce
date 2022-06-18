import InputField from "../components/Form/InputField";
import { FormWrapper, FormContainer, Linked } from "../styled-component/common";
import { useForm } from "react-hook-form";
import AuthBtn from "../components/Form/AuthBtn";
import FormFooter from "../components/Form/FormFooter";
import FormTitle from "../components/Form/FormTitle";
import FormFooterText from "../components/Form/FormFooterText";
import photo from "../assests/undraw_login_re_4vu2.svg";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <FormContainer>
      <div className="img_container">
        <FormTitle>Login Please</FormTitle>
        <img src={photo} alt="" />
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormWrapper>
          <InputField
            type="email"
            label="E-mail"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            danger={errors.email && true}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Enter your Password"
            {...register("password", { required: true })}
            danger={errors.password && true}
          />
          <AuthBtn type="submit">Login</AuthBtn>
          <FormFooter route="signin" role="Sign In">
            <FormFooterText>Didn't have an account?</FormFooterText>
          </FormFooter>
          <FormFooter>
            <Linked to="/">Forget Password</Linked>
          </FormFooter>
        </FormWrapper>
      </form>
    </FormContainer>
  );
}

export default Login;
