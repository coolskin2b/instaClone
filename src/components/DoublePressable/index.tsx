import {Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IdoublePressable {
  onDoublePress?: () => void;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: PropsWithChildren<IdoublePressable>) => {
  let lastTap = 0;

  const HandleDoublePress = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={HandleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
