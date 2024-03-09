import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomSheetUI = ({children}: {children: React.ReactNode}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{paddingBottom: insets.bottom + 10, flex: 1}}>{children}</View>
  );
};

export default BottomSheetUI;
