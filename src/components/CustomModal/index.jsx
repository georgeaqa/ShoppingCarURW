import { Card, Modal, Portal, Text, useTheme } from "react-native-paper";
import { Image, View } from "react-native";

import React from "react";

const CustomModal = ({ visible, onDismiss, character }) => {
  const theme = useTheme();
  return (
    <Portal>
      <Modal
        className="mx-[10%]"
        visible={visible}
        onDismiss={onDismiss}
      >
        <Card className="h-[80%] border justify-center" style={{borderColor:theme.colors.border}}>
            <Image
          className="h-full"
          source={character.imageSource}
          resizeMode="contain"
        />
        </Card>
        
      </Modal>
    </Portal>
  );
};

export default CustomModal;
