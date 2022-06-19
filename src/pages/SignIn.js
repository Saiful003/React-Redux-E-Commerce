import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/Form/InputField";
import { FormWrapper, FormContainer } from "../styled-component/common";
import AuthBtn from "../components/Form/AuthBtn";
import FormTitle from "../components/Form/FormTitle";
import FormFooterText from "../components/Form/FormFooterText";
import { showToastHandler } from "../utils/toastHandler";
import photo from "../assests/undraw_account_re_o7id.svg";
import FormFooter from "../components/Form/FormFooter";

function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      marriedstatus: "",
      religion: "",
      nationality: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      showToastHandler({
        text: "Thank you for your response",
        type: "success",
      });
    }
  }, [isSubmitSuccessful, reset]);

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <>
      <FormContainer>
        <div className="img_container">
          <FormTitle>Create Your Account</FormTitle>
          <img className="signIn" src={photo} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <InputField
              {...register("firstname", { required: true })}
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              danger={errors.firstname && true}
            ></InputField>
            <InputField
              {...register("lastname", { required: true })}
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              danger={errors.lastname && true}
            ></InputField>
            <InputField
              {...register("email", { required: true })}
              label="Email"
              placeholder="Enter your email"
              type="email"
              danger={errors.email && true}
            />
            <InputField
              {...register("age", { required: true, min: 0, max: 18 })}
              label="Age"
              placeholder="Enter your age"
              type="number"
              danger={errors.age && true}
            />
            <InputField
              {...register("marriedstatus", { required: true })}
              label="Married Status"
              placeholder="Enter your married status"
              type="text"
              danger={errors.marriedstatus && true}
            />
            <InputField
              {...register("religion", { required: true })}
              label="Religion"
              placeholder="Enter your religion?"
              type="text"
              danger={errors.religion && true}
            />
            <AuthBtn type="submit">Submit</AuthBtn>
            <FormFooter route="login" role="Login">
              <FormFooterText>Already have an account?</FormFooterText>
            </FormFooter>
          </FormWrapper>
        </form>
      </FormContainer>
    </>
  );
}

export default SignIn;
