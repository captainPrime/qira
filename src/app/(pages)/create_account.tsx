import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import VCInput from "../../components/VCInput";
import EyesOpen from "../../assets/icons/eye-slash.svg";
import EyesClose from "../../assets/icons/eye-close.svg";
import {
  EMAIL_INPUT_VALIDATION,
  NAME_INPUT_VALIDATION,
  PASSWORD_INPUT_VALIDATION,
} from "../../helper/validation";
import VCLayout from "../../components/VCLayout";
import VCButton from "../../components/VCButton";
import VCText from "../../components/VCText";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { LOGO } from "../../helper/images";

//import Google from "../../assets/icons/google.svg";

const CreateAccount = () => {
  const [hidePassword, setHidePassword]: any = React.useState(true);
  const [rememberMe, setRememberMe] = React.useState(false);
  let personalDetailsDefaultValues: any = {
    email: "",
    password: "",
    name: "",
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: personalDetailsDefaultValues,
  });

  const renderForm = () => (
    <View>
      <View style={LoginStye.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={LoginStye.input_wrapper}>
              <VCInput
                value={value}
                // textLabel={"Email"}
                placeHolder="Enter Name"
                onChangeText={onChange}
                errorMessage={errors.name && errors.name.message}
              />
            </View>
          )}
          name="name"
          rules={NAME_INPUT_VALIDATION}
        />
      </View>
      <View style={LoginStye.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={LoginStye.input_wrapper}>
              <VCInput
                value={value}
                // textLabel={"Email"}
                placeHolder="Enter Email"
                onChangeText={onChange}
                errorMessage={errors.email && errors.email.message}
              />
            </View>
          )}
          name="email"
          rules={EMAIL_INPUT_VALIDATION}
        />
      </View>

      <View style={LoginStye.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={LoginStye.input_wrapper}>
              <VCInput
                value={value}
                // icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                handleTogglePasswordVisibilty={() =>
                  setHidePassword(!hidePassword)
                }
                // textLabel={"Password"}
                placeHolder="Enter Password"
                onChangeText={onChange}
                errorMessage={errors.password && errors.password.message}
                secureTextEntry={hidePassword}
              />
            </View>
          )}
          name="password"
          rules={PASSWORD_INPUT_VALIDATION}
        />
      </View>
    </View>
  );

  const handleSubmitForm = () => {
    router.replace("verification");
  };
  return (
    <VCLayout useSafeArea={true}>
      <View style={LoginStye.header}>
        <View style={{ marginVertical: 10 }}>
          <Image style={{ width: 103, height: 48 }} source={LOGO} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <VCText type="h1" text="Create Account" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText
            type="normal"
            align="center"
            text="Register or sign in  to find apartment to customize
            your searches and see your account details"
          />
        </View>
      </View>
      {renderForm()}

      
      <View style={LoginStye.button_container}>
        <VCButton
          label="Continue"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          padding: 5,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#E2E2E2",
          padding: 15,
          borderRadius: 8,
        }}
      >
        {/* <Google
          width={24}
          height={24}
          style={{ marginRight: 15 }}
          color="red"
        /> */}
        <VCText type="bold" text="Sign Up with Google" color="grey" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <VCText type="bold" align="center" text="Already have any account " />
        <TouchableOpacity onPress={() => router.navigate("login")}>
          <VCText
            type="bolder"
            align="center"
            text="Login"
            color="secondary"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          bottom: 0,
        }}
      ></View>
    </VCLayout>
  );
};

const LoginStye = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginVertical: 15,
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  input_wrapper: {
    marginBottom: 10,
  },

  button_container: {
    marginBottom: 30,
  },
  rememberMeContainerFull: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  rememberMeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#C6C6C6",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#C6C6C6", // Change the background color when checked
  },
  rememberMeLabel: {
    fontSize: 14,
    color: "#FF7F51",
  },
});

export default CreateAccount;
