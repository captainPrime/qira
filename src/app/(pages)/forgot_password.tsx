import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import VCInput from "../../components/VCInput";
import { EMAIL_INPUT_VALIDATION } from "../../helper/validation";
import VCLayout from "../../components/VCLayout";
import VCButton from "../../components/VCButton";
import VCText from "../../components/VCText";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { LOGO } from "../../helper/images";

const ForgetPassword = () => {
  const [hidePassword, setHidePassword]: any = React.useState(true);
  const [rememberMe, setRememberMe] = React.useState(false);
  let personalDetailsDefaultValues: any = {
    email: "",
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
      <View style={ForgotPasswordStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={ForgotPasswordStyle.input_wrapper}>
              <VCInput
                value={value}
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
    </View>
  );

  const handleSubmitForm = () => {
    router.replace("verification");
  };
  return (
    <VCLayout>
      <View style={ForgotPasswordStyle.header}>
        <View style={{ marginVertical: 10 }}>
          <Image style={{ width: 103, height: 48 }} source={LOGO} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText type="h1" text="Reset Password" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText
            type="normal"
            align="center"
            text="We will help you recover your account"
          />
        </View>
      </View>
      {renderForm()}

      <View style={ForgotPasswordStyle.rememberMeContainerFull}></View>
      <View style={ForgotPasswordStyle.button_container}>
        <VCButton
          label="Send Code"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <VCText type="bold" align="center" text="Already have account " />
        <TouchableOpacity onPress={() => router.navigate("login")}>
          <VCText type="bolder" align="center" text="Log In" color="orange" />
        </TouchableOpacity>
      </View>
    </VCLayout>
  );
};

export const ForgotPasswordStyle = StyleSheet.create({
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
    borderColor: "red",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "red", // Change the background color when checked
  },
  rememberMeLabel: {
    fontSize: 14,
    color: "red",
  },
});

export default ForgetPassword;
