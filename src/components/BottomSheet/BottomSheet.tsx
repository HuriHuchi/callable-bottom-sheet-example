import React, {useCallback} from 'react';
import {
  BottomSheetRef,
  BottomSheetRefObj,
  CustomBottomSheetProps,
} from './types';
import BottomSheetRoot from './BottomSheetRoot';

const bottomSheetRef: BottomSheetRefObj = {
  current: null,
};

const BottomSheet = () => {
  const setRef = useCallback((ref: BottomSheetRef | null) => {
    if (ref) {
      bottomSheetRef.current = ref;
    }
  }, []);

  return <BottomSheetRoot ref={setRef} />;
};

function show(comp: React.ReactNode, props?: CustomBottomSheetProps) {
  bottomSheetRef.current?.show(comp, props);
}

function close() {
  bottomSheetRef.current?.close();
}

function isOpened() {
  return bottomSheetRef.current?.isOpened;
}
/**
 * API
 *  */

BottomSheet.show = show;
BottomSheet.close = close;
BottomSheet.isOpened = isOpened;

export default BottomSheet;
