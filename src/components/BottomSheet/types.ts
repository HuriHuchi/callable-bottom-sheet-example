import React from 'react';
import {BottomSheetModalProps} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

export type BottomSheetRefObj = {
  current: BottomSheetRef | null;
};

export type BottomSheetRef = {
  show: (comp: React.ReactNode, props?: CustomBottomSheetProps) => void;
  close: () => void;
  isOpened: boolean;
};

export type CustomBottomSheetProps = {
  // if null, it does not render backdrop
  bottomSheetBackdropProps?: Omit<
    BottomSheetDefaultBackdropProps,
    'animatedIndex' | 'animatedPosition'
  >;
  bottomSheetModalProps?: Partial<BottomSheetModalProps>;
  backdropComponent?: React.ReactNode | null;
};

export type CustomBottomSheetState = {
  height: number;
};

export type CustomBottomSheetAction = {
  updateHeight: (height: number) => void;
};
