import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {Keyboard} from 'react-native';
import BottomSheetUI from './BottomSheetUI';
import {CustomBottomSheetProps} from './types';

const BottomSheetRoot = forwardRef((_, ref) => {
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedSnapPoints,
    animatedHandleHeight,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const modalRef = useRef<BottomSheetModal>(null);

  // states
  const [contents, setContents] = useState<React.ReactNode>();
  const [bottomSheetProps, setBottomSheetProps] =
    React.useState<CustomBottomSheetProps>();
  const [isOpened, setIsOpened] = React.useState(false);

  // for dynamic sizing by bottomSheet contents
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) =>
      bottomSheetProps?.backdropComponent === null ? null : (
        <BottomSheetBackdrop
          {...props}
          {...bottomSheetProps?.bottomSheetBackdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
    [bottomSheetProps],
  );

  const show = React.useCallback(
    (comp: React.ReactNode, params?: CustomBottomSheetProps) => {
      // in case Keyboard has opened
      Keyboard.dismiss();

      // updates contents to show
      setContents(comp);
      setBottomSheetProps(params);

      if (!isOpened) {
        modalRef.current?.present();
        setIsOpened(true);
      }
    },
    [isOpened],
  );

  const close = useCallback(() => {
    modalRef.current?.dismiss();
    setIsOpened(false);
  }, []);

  // Expose method to parent components
  useImperativeHandle(
    ref,
    React.useCallback(() => ({show, close, isOpened}), [show, close, isOpened]),
  );

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={renderBackdrop}
      keyboardBehavior="interactive"
      backgroundStyle={{borderTopLeftRadius: 32, borderTopRightRadius: 32}}
      {...bottomSheetProps?.bottomSheetModalProps}
      onDismiss={() => setIsOpened(false)}>
      <BottomSheetView onLayout={event => handleContentLayout(event)}>
        <BottomSheetUI>{contents}</BottomSheetUI>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheetRoot;
