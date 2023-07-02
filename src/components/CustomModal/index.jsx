import { Card, Modal, Portal, Text, useTheme } from "react-native-paper";
import { Image, View } from "react-native";

import React from "react";

const CustomModal = ({ visible, onDismiss, character }) => {
  const theme = useTheme();
  return (
    <Portal>
      <Modal
        className="mx-[10%] my-[50%]"
        visible={visible}
        onDismiss={onDismiss}
      >
        <Image
          className="h-full"
          source={character.imageSource}
          resizeMode="stretch"
        />
      </Modal>
    </Portal>
  );
};

export default CustomModal;
