import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import VCInput from "../../components/VCInput";
import EyesOpen from "../../assets/icons/eye-slash.svg";
import EyesClose from "../../assets/icons/eye-close.svg";
import { PASSWORD_INPUT_VALIDATION } from "../../helper/validation";
import VCLayout from "../../components/VCLayout";
import VCButton from "../../components/VCButton";
import VCText from "../../components/VCText";
import VCFooter from "../../components/VCFooter";
import { LOGO } from "../../helper/images";
import { router } from "expo-router";

const SetPassword = () => {
  const [hidePassword, setHidePassword]: any = React.useState(true);
  let personalDetailsDefaultValues: any = {
    password: "",
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
      <View style={PersonalInformationStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={PersonalInformationStyle.input_wrapper}>
              <VCInput
                value={value}
                // icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                handleTogglePasswordVisibilty={() =>
                  setHidePassword(!hidePassword)
                }
                placeHolder="Enter your password"
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

      <View style={PersonalInformationStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={PersonalInformationStyle.input_wrapper}>
              <VCInput
                value={value}
                // icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                handleTogglePasswordVisibilty={() =>
                  setHidePassword(!hidePassword)
                }
                placeHolder="Confirm your password"
                onChangeText={onChange}
                errorMessage={
                  errors.confirm_password && errors.confirm_password.message
                }
                secureTextEntry={hidePassword}
              />
            </View>
          )}
          name="confirm_password"
          rules={PASSWORD_INPUT_VALIDATION}
        />
      </View>
    </View>
  );

  const handleSubmitForm = () => {
    router.replace("home");
  };
  return (
    <View style={PersonalInformationStyle.container}>
      <View style={PersonalInformationStyle.header}>
        <View style={{ marginVertical: 10 }}>
          <Image style={{ width: 103, height: 48 }} source={LOGO} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText type="h1" text="Set New Password" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText
            type="normal"
            align="center"
            text="Create new password for your Qira account"
          />
        </View>
      </View>
      {renderForm()}
      <View style={PersonalInformationStyle.button_container}>
        <VCButton
          label="Save Password"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>

      <View
        style={{
          bottom: 0,
        }}
      ></View>
    </View>
  );
};

const PersonalInformationStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FEF8F8",
  },
  header: {
    marginVertical: 25,
    marginTop: 50,
    alignContent: "center",
    alignItems: "center",
  },
  input_wrapper: {
    marginBottom: 10,
  },

  button_container: {
    marginBottom: 30,
    marginTop: 50,
  },
});

export default SetPassword;
