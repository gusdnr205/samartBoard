import { create } from 'zustand';
import { createExamState, IExamState } from './examState';

interface IGlobalStoreState extends IExamState {}

export const globalStore = create<IGlobalStoreState>((...set) => {
  return {
    ...createExamState(...set),
  };
});
