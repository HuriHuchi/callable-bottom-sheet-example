import React from 'react';
import {Button, Text, View} from 'react-native';
import BottomSheet from './BottomSheet';

function BottomSheetExampleContent() {
  return (
    <View style={{padding: 16, gap: 16}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        BottomSheet Example
      </Text>
      <View style={{gap: 8}}>
        <Text style={{fontSize: 20}}>This is Example 1</Text>
        <Text style={{fontSize: 20}}>This is Example 2</Text>
        <Text style={{fontSize: 20}}>This is Example 3</Text>
      </View>
      <Button title="Close BottomSheet" onPress={() => BottomSheet.close()} />
    </View>
  );
}

export default BottomSheetExampleContent;
