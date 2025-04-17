// Hello.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // 전역으로 쓰려면 생략 가능 (globals: true 설정 시)
import Hello from './Hello';

describe('Hello 컴포넌트', () => {
  test('사용자 이름을 포함한 인사말을 출력한다', () => {
    render(<Hello name="Jane" />);
    const greeting = screen.getByText(/Hello, Jane!/i);
    expect(greeting).toBeInTheDocument();
  });
});
