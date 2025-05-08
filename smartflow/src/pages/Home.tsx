import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import api from '@lib/axios';  // 경로는 상황에 맞게

export const fetchProfile = async (characterName: string) => {
  const res = await api.get(`/api/v1/users/lostark/${characterName}/profiles`);
  return res.data.result;
};
export default function Home() {
  const [character, setCharacter] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['lostarkProfile', submittedName],
    queryFn: () => fetchProfile(submittedName),
    enabled: !!submittedName,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(character.trim());
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-gray-900 py-3 px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">놀이터</h1>
        <form onSubmit={handleSubmit} className="w-[70%]">
          <input
            type="text"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            placeholder="검색할 캐릭터명을 입력하세요..."
            className="w-full px-3 py-1 rounded-md text-white bg-gray-700"
          />
        </form>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">홈</a>
          <a href="/lotto" className="hover:underline">로또</a>
          <a href="#" className="hover:underline">순위</a>
          <a href="#" className="hover:underline">통계</a>
          <a href="#" className="hover:underline">도구</a>
          <a href="#" className="hover:underline">명예의 전당</a>
        </nav>
      </header>

      <main className="grid grid-cols-5 gap-4 px-4 py-6">
        <aside className="col-span-1 space-y-4">
          <div className="bg-gray-800 p-3 rounded">광고/배너</div>
        </aside>

        <section className="col-span-3 space-y-6">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">검색 결과</h2>

            {isLoading && <p>불러오는 중...</p>}
            {error && <p className="text-red-500">오류가 발생했습니다.</p>}

            {data && (
              <div className="bg-gray-700 p-3 rounded text-center">
                <img
                  src={data.CharacterImage}
                  alt={data.CharacterName}
                  className="w-48 h-48 object-cover mx-auto rounded mb-4 border border-gray-600"
                />
                <h3 className="text-xl font-bold">{data.CharacterName}</h3>
                <p className="text-sm">서버: {data.ServerName}</p>
                <p className="text-sm">클래스: {data.CharacterClassName}</p>
                <p className="text-sm">길드: {data.GuildName}</p>
                <p className="text-sm">평균 아이템 레벨: {data.ItemAvgLevel}</p>
              </div>
            )}
          </div>
        </section>

        <aside className="col-span-1 space-y-4">
          <div className="bg-gray-800 p-3 rounded">배너 광고</div>
        </aside>
      </main>
    </div>
  );
}
