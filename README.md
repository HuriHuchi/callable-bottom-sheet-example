# Callable BottomSheet Example

## About this project

해당 프로젝트는 [react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet)의 BottomSheet 컴포넌트를 래핑하여 메서드를 통해 BottomSheet을 열고 닫을 수 있도록 구현한 예제 프로젝트입니다.
아래와 같이 사용할 수 있습니다.

```typescript
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
```

## How to Start this Project

```bash
# ios
yarn ios

# android
yarn android
```

