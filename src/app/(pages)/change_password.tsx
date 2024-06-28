import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import VCInput from "../../components/VCInput";
import EyesOpen from "../../assets/icons/eye-slash.svg";
import EyesClose from "../../assets/icons/eye-close.svg";
import {
  EMAIL_INPUT_VALIDATION,
  NAME_INPUT_VALIDATION,
  PASSWORD_INPUT_VALIDATION,
  PHONE_NUMBER_INPUT_VALIDATION,
} from "../../helper/validation";
import VCLayout from "../../components/VCLayout";
import VCButton from "../../components/VCButton";

const ChangePassword = () => {
  const [hidePassword, setHidePassword]: any = React.useState(true);
  let personalDetailsDefaultValues: any = {
    new_password: "",
    old_name: "",
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
    <View style={style.mainContainer}>
      <ScrollView>
        <View style={style.input_wrapper}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <View style={style.input_wrapper}>
                <VCInput
                  value={value}
                  icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                  handleTogglePasswordVisibilty={() =>
                    setHidePassword(!hidePassword)
                  }
                  placeHolder="Enter old password"
                  onChangeText={onChange}
                  errorMessage={
                    errors.old_password && errors.old_password.message
                  }
                  secureTextEntry={hidePassword}
                />
              </View>
            )}
            name="old_password"
            rules={PASSWORD_INPUT_VALIDATION}
          />
        </View>

        <View style={style.input_wrapper}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <View style={style.input_wrapper}>
                <VCInput
                  value={value}
                  icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                  handleTogglePasswordVisibilty={() =>
                    setHidePassword(!hidePassword)
                  }
                  placeHolder="Enter new password"
                  onChangeText={onChange}
                  errorMessage={
                    errors.new_password && errors.new_password.message
                  }
                  secureTextEntry={hidePassword}
                />
              </View>
            )}
            name="new_password"
            rules={PASSWORD_INPUT_VALIDATION}
          />
        </View>

        <View style={style.input_wrapper}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }: any) => (
              <View style={style.input_wrapper}>
                <VCInput
                  value={value}
                  icon={hidePassword ? <EyesClose /> : <EyesOpen />}
                  handleTogglePasswordVisibilty={() =>
                    setHidePassword(!hidePassword)
                  }
                  placeHolder="Confirm new password"
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
      </ScrollView>
    </View>
  );

  const handleSubmitForm = () => {
    console.log("submitting");
  };
  return (
    <View style={style.container}>
      {renderForm()}
      <View style={style.button_container}>
        <VCButton
          label="Save Changes"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FEF8F8",
  },

  input_wrapper: {
    marginBottom: 10,
  },

  button_container: {
    marginBottom: 30,
    marginTop: 80
  },
  mainContainer: {
    marginTop: 70,
  },
});

export default ChangePassword;
