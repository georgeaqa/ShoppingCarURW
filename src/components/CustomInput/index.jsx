import { HelperText, TextInput } from "react-native-paper";

import { COLORS } from "../../constants";
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
        fieldState: { error, invalid },
      }) => (
        <>
          <TextInput
            className="w-full my-1"
            mode="outlined"
            value={value}
            outlineColor={COLORS.gold}
            activeOutlineColor={COLORS.blue}
            onChangeText={onChange}
            outlineStyle={{ borderRadius: 15, backgroundColor: COLORS.white }}
            onBlur={onBlur}
            error={invalid}
            {...restProps}
          />

          {error && (
            <HelperText
              className="text-[#FF0000] w-full"
              style={{ fontFamily: "UrbanRivals" }}
              variant="labelSmall"
            >
              {error.message}
            </HelperText>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
