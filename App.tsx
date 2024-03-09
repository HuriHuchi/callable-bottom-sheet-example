import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomSheet from './src/components/BottomSheet';
import BottomSheetExampleContent from './src/components/BottomSheetExampleContent';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          {/* Mount invisible BottomSheet in the root */}
          <BottomSheet />
          {/* Component to handle BottomSheet */}
          <SomeNestedComponent />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function SomeNestedComponent() {
  return (
    <View style={[styles.container, {gap: 8}]}>
      <Button
        onPress={() => {
          BottomSheet.show(<BottomSheetExampleContent />);
        }}
        title="Open BottomSheet"
        accessibilityLabel="Open Bottomsheet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
