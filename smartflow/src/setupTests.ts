// ✅ Vitest 전용 - Jest 관련 코드 없음
import '@testing-library/jest-dom'; // expect(...).toBeInTheDocument() 등 확장 matcher 등록
import { vi } from 'vitest';

// window.matchMedia 같은 브라우저 API 모킹이 필요하면 여기에 작성
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // ⬅️ 여기서도 vi.fn() 사용!
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});
