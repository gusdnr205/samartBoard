// src/libs/axios.ts

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 예: 응답 에러 공통 처리 (선택)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 예: 401 에러 로그인 유도 등
    if (error.response?.status === 401) {
      console.warn('인증 에러: 로그인 필요');
    }
    return Promise.reject(error);
  }
);

export default api;
