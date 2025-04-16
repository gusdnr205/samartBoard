import { StateCreator } from 'zustand';

export interface IExamState {
  isExam: boolean;
  setIsExam: (isExam: boolean) => void;
}

/**
 * StateCreator
 * @param_01 <T> : 관리할 상태, ex) IModalState & IUserState 등 여러가지를 관리할 경우 같이 선언
 * @param_02 <MiddlewareArray> : 스토어의 동작을 수정할 수 있는 미들웨어 배열, 기본값은 []
 * @param_03 <StoreExtend> : 스토어 API에 대한 확장, 기본값은 []
 * @param_04 <U> : 생성 함수 반환타입, 기본값은 <T>와 동일
 */
export const createExamState: StateCreator<IExamState, [], [], IExamState> = (set) => ({
  isExam: false,
  setIsExam: (isExam: boolean) =>
    set((state) => {
      return { ...state, isExam: !isExam };
    }),
});
