import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import VCInput from "../../components/VCInput";
import Camera from "../../assets/icons/camera.svg";
import {
  EMAIL_INPUT_VALIDATION,
  NAME_INPUT_VALIDATION,
  PHONE_NUMBER_INPUT_VALIDATION,
} from "../../helper/validation";
import { ModalPortal } from "react-native-modals";
import VCButton from "../../components/VCButton";
import VCBottomModal from "../../components/VCBottomModal";
import VCModalList from "../../components/VCModalList";
import { VCInputStyle } from "../../assets/styles/vc_input.style";
import VCText from "../../components/VCText";
import * as ImagePicker from "expo-image-picker";

const PersonalInformation = () => {
  let personalDetailsDefaultValues: any = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    gender: "",
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: personalDetailsDefaultValues,
  });

  const gender = ["male", "female", "other"];
  const [selectedIGender, setSelectedGender] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageClick = async () => {
    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.assets[0].uri);
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSelectGender = (item: any) => {
    console.log(item);
    setSelectedGender(item);
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderForm = () => (
    <ScrollView>
      <View style={PersonalInformationStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={PersonalInformationStyle.input_wrapper}>
              <VCInput
                value={value}
                placeHolder="Enter your first name"
                onChangeText={onChange}
                errorMessage={errors.first_name && errors.first_name.message}
              />
            </View>
          )}
          name="first_name"
          rules={NAME_INPUT_VALIDATION}
        />
      </View>

      <View style={PersonalInformationStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={PersonalInformationStyle.input_wrapper}>
              <VCInput
                value={value}
                placeHolder="Enter your email"
                onChangeText={onChange}
                errorMessage={errors.email && errors.email.message}
              />
            </View>
          )}
          name="email"
          rules={EMAIL_INPUT_VALIDATION}
        />
      </View>
      <View style={PersonalInformationStyle.input_wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View style={PersonalInformationStyle.input_wrapper}>
              <VCInput
                value={value}
                placeHolder="Enter your phone number"
                keyboardType="numeric"
                onChangeText={onChange}
                errorMessage={
                  errors.phone_number && errors.phone_number.message
                }
              />
            </View>
          )}
          name="phone_number"
          rules={PHONE_NUMBER_INPUT_VALIDATION}
        />
      </View>
      <View style={PersonalInformationStyle.input_wrapper}>
        <TouchableOpacity onPress={() => openModal()}>
          <View style={[VCInputStyle.text_input_wrapper]}>
            <View style={[VCInputStyle.select_container]}>
              <View>
                <Text
                  style={{ marginLeft: 10, color: "#898F9E", fontSize: 14 }}
                >
                  {selectedIGender ? selectedIGender : "Select gender"}
                </Text>
              </View>
            </View>

            <View>{/* put select icon */}</View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[PersonalInformationStyle.input_wrapper, { marginTop: 10 }]}>
        <TouchableOpacity onPress={() => openModal()}>
          <View style={[VCInputStyle.text_input_wrapper]}>
            <View style={[VCInputStyle.select_container]}>
              <View>
                <Text
                  style={{ marginLeft: 10, color: "#898F9E", fontSize: 14 }}
                >
                  {selectedIGender ? selectedIGender : "State"}
                </Text>
              </View>
            </View>

            <View>{/* put select icon */}</View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[PersonalInformationStyle.input_wrapper, { marginTop: 10 }]}>
        <TouchableOpacity onPress={() => openModal()}>
          <View style={[VCInputStyle.text_input_wrapper]}>
            <View style={[VCInputStyle.select_container]}>
              <View>
                <Text
                  style={{ marginLeft: 10, color: "#898F9E", fontSize: 14 }}
                >
                  {selectedIGender ? selectedIGender : "City"}
                </Text>
              </View>
            </View>

            <View>{/* put select icon */}</View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const handleSubmitForm = () => {
    console.log("submitting");
  };

  return (
    <View style={PersonalInformationStyle.container}>
      <VCBottomModal
        isVisible={modalVisible}
        closeModal={closeModal}
        title="Choose Ticket"
      >
        <VCModalList
          data={gender}
          setSelectedItem={(item: any) => handleSelectGender(item)}
        />
      </VCBottomModal>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={PersonalInformationStyle.header}>
          <Pressable onPress={handleProfileImageClick}>
            <View style={{ position: "relative" }}>
              <Image
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("../../assets/icons/avatar.png")
                }
                style={PersonalInformationStyle.profileImage}
              />
              <View style={PersonalInformationStyle.camera}>
                <Camera width={34} height={34} />
              </View>
            </View>
          </Pressable>

          <View style={{ marginVertical: 5 }}>
            <VCText type="h1" text="Allen Francis" />
          </View>
        </View>
      </View>

      {renderForm()}
      <View style={PersonalInformationStyle.button_container}>
        <VCButton
          label="Save Changes"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>
      <ModalPortal />
    </View>
  );
};

const PersonalInformationStyle = StyleSheet.create({
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
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: 30
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 10,
  },

  camera: {
    position: "absolute",
    bottom: 13,
    right: 0,
  },
});

export default PersonalInformation;
