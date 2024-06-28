/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

// import SvgUri from "react-native-svg-uri";

import VCErrorComponent from "./VCErrorComponent";
import { VCInputStyle } from "../assets/styles/vc_input.style";
import { Picker } from "@react-native-picker/picker";
interface VCInputProps {
  icon?: any;
  style?: object;
  type?: "text" | "textarea" | "select";
  image?: string | null;
  value?: string | number;
  onBlur?: Function;
  onChangeText?: Function;
  errorMessage?: string | any;
  textLabel?: string;
  isImportant?: boolean;
  textRightLabel?: string | null;
  placeHolder?: string;
  handleOnPress?: Function;
  handleOnChangeDate?: Function;
  mininumDate?: boolean;
  maximumDate?: boolean;
  onEndEditing?: Function;
  secureTextEntry?: boolean;
  keyboardType?: string;
  defaultValue?: string;
  maxLength?: number;
  hidePassword?: any;
  minimumDateValue?: any;
  openDateModal?: boolean;
  returnKeyType?: string;
  handleTogglePasswordVisibilty?: Function;
  handleOnCancelDate?: Function;
  editable?: boolean;
  options?: any;
  dropdowmType?: boolean;
  blurOnSubmit?: any;
}

function VCInput(props: VCInputProps) {
  const {
    icon,
    style,
    type,
    image = null,
    value,
    textLabel,
    textRightLabel,
    minimumDateValue,
    openDateModal,
    errorMessage,
    isImportant,
    placeHolder,
    onBlur,
    maxLength,
    handleOnPress,
    handleOnChangeDate,
    mininumDate,
    maximumDate,
    handleOnCancelDate,
    editable,
    handleTogglePasswordVisibilty,
    dropdowmType,
    blurOnSubmit,
    options,
    ...rest
  } = props;

  const [date, setDate] = useState(new Date());

  let inputComponentStyle = {};

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  switch (type) {
    case "text":
      inputComponentStyle = VCInputStyle.text_input_style;
      break;
    case "textarea":
      inputComponentStyle = VCInputStyle.text_area_style;
      break;
    default:
      inputComponentStyle = VCInputStyle.text_input_style;
      break;
  }

  const renderSelect = () => {
    return (
      <View style={[VCInputStyle.text_input_wrapper]}>
        <View style={[VCInputStyle.select_container]}>
          <TouchableOpacity onPress={toggleModal}>
            <View>
              <Text style={{ marginLeft: 10, color: "#898F9E", fontSize: 14 }}>
                {value ? value : placeHolder}
              </Text>
            </View>
          </TouchableOpacity>
          <View>{/* put select icon */}</View>
        </View>
        <Modal visible={isModalVisible} animationType="slide">
          <View style={[VCInputStyle.modalContainer]}>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => {
                onChangeText(itemValue);
                toggleModal();
              }}
            >
              {options.map(({ option, index }: any) => (
                <Picker.Item
                  key={index}
                  label={option?.label}
                  value={option?.value}
                />
              ))}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  };

  const renderTextArea = () => {
    return (
      <TextInput
        style={[VCInputStyle.text_input_wrapper, inputComponentStyle]}
        placeholderTextColor={"#898F9E"}
        value={value}
        numberOfLines={10}
        multiline={true}
        placeholder={placeHolder}
        blurOnSubmit={blurOnSubmit}
        {...rest}
      />
    );
  };

  const renderDate = () => {
    return (
      <View>
        <DateTimePickerModal
          isVisible={openDateModal}
          mode="date"
          minimumDate={mininumDate ? minimumDateValue : null}
          maximumDate={maximumDate ? new Date() : null}
          onConfirm={(date) => {
            handleOnChangeDate?.(date);
          }}
          onCancel={() => handleOnCancelDate?.()}
        />
      </View>
    );
  };

  const renderIconElement = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (dropdowmType) {
            handleOnPress?.();
          } else {
            handleTogglePasswordVisibilty?.();
          }
        }}
        style={{ marginLeft: 10 }}
      >
        <View style={{ marginRight: 10 }}>{icon}</View>
      </TouchableOpacity>
    );
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderText = () => {
    return (
      <View
        style={[
          VCInputStyle.text_input_wrapper,
          isFocused ? VCInputStyle.focused_input : null,
        ]}
      >
        <TextInput
          style={VCInputStyle.text_input_style}
          onPressIn={() => {
            if (!dropdowmType) {
              handleOnPress?.();
            }
          }}
          editable={dropdowmType ? false : editable}
          placeholder={placeHolder || ""}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          returnKeyType="done"
          placeholderTextColor={"#898F9E"}
          {...rest}
        />
        {icon && renderIconElement()}
      </View>
    );
  };

  const renderElement = (type: any) => {
    switch (type) {
      case "text":
        return renderText();
      case "textarea":
        return renderTextArea();
      case "select":
        return renderSelect();

      default:
        return renderText();
        break;
    }
  };

  const renderLabel = () => {
    return (
      textLabel && (
        <Text style={VCInputStyle.input_label}>
          {textLabel}
          {isImportant && (
            <Text style={VCInputStyle.input_label_important}>*</Text>
          )}
        </Text>
      )
    );
  };

  const renderRightLabel = () => {
    return (
      textRightLabel && (
        <Text style={VCInputStyle.input_label_right}>{textRightLabel}</Text>
      )
    );
  };

  return (
    <View style={[VCInputStyle.text_input_container, { ...style }]}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>{renderLabel()}</View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          {renderRightLabel()}
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={handleOnPress ? 0.4 : 1}
        onPressIn={() => handleOnPress?.()}
      >
        {renderElement(type)}
        {errorMessage && (
          <View style={{ marginTop: 7 }}>
            <VCErrorComponent message={errorMessage} />
          </View>
        )}
      </TouchableOpacity>
      {renderDate()}
    </View>
  );
}

VCInput.defaultProps = {
  type: "text",
  editable: true,
  dropdowmType: false,
  minimumDateValue: new Date(),
};

export default VCInput;
