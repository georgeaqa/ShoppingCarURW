import { Text, TextInput } from "react-native";

import { Controller } from "react-hook-form";
import React from "react";

const CustomInput = ({ control, name, rules = {}, ...restProps }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            className="w-full m-2 p-2 text-xs border rounded border-[#FFFF00]"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={{ fontFamily: "UrbanRivals" }}
            {...restProps}
          />

          {error && (
            <Text
              className="text-[#FF0000] text-[10px] w-full"
              style={{ fontFamily: "UrbanRivals" }}
            >
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
