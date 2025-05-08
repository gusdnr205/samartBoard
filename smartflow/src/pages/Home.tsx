import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Navigation */}
      <header className="bg-gray-900 py-3 px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">놀이터</h1>
        <input
          type="text"
          placeholder="검색할 캐릭터명을 입력하세요..."
          className="px-3 py-1 rounded-md text-black"
        />
        <nav className="space-x-4">
          <a href="/" className="hover:underline">홈</a>
          <a href="/lotto" className="hover:underline">로또</a>
          <a href="#" className="hover:underline">순위</a>
          <a href="#" className="hover:underline">통계</a>
          <a href="#" className="hover:underline">도구</a>
          <a href="#" className="hover:underline">명예의 전당</a>
        </nav>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-5 gap-4 px-4 py-6">
        {/* Left Sidebar */}
        <aside className="col-span-1 space-y-4">
          <div className="bg-gray-800 p-3 rounded">광고/배너</div>
          <div className="bg-gray-800 p-3 rounded">
            <h2 className="font-semibold mb-2">로스트아크 업데이트</h2>
            <ul className="text-sm list-disc list-inside">
              {/* <li>05월 07일 업데이트</li>
              <li>04월 23일 업데이트</li>
              <li>04월 16일 업데이트</li>
              <li>04월 09일 업데이트</li>
              <li>04월 02일 업데이트</li> */}
            </ul>
          </div>
        </aside>

        {/* Center Content */}
        <section className="col-span-3 space-y-6">
          <div className="bg-gray-800 p-4 rounded text-center">
            <h2 className="text-lg font-semibold mb-2">오늘의 글</h2>
            <p className="text-sm">2025.05.08 21:00:00 시작</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-700 p-3 rounded">
                <h3 className="font-medium">테스트 1</h3>
                <p className="text-xs">테스트</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
              <h3 className="font-medium">테스트 1</h3>
              <p className="text-xs">테스트</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
              <h3 className="font-medium">테스트 1</h3>
              <p className="text-xs">테스트</p>
              </div>
            </div>
            <p className="mt-2 text-orange-500 font-bold">모험섬 등장까지 남은 시간: 33:13</p>
          </div>
        </section>
    

        {/* Right Sidebar */}
        <aside className="col-span-1 space-y-4">
          <div className="bg-gray-800 p-3 rounded">배너 광고</div>
          <div className="bg-gray-800 p-3 rounded">
            <h2 className="font-semibold mb-2">이야기</h2>
            <ul className="text-sm list-disc list-inside">
              {/* <li>2024.05.14 광고 및 계정 문제</li>
              <li>2023.12.25 크리스마스 기부</li>
              <li>2023.11.20 자타 포럼 후기</li>
              <li>2023.10.10 사이트 업데이트</li>
              <li>2023.04.27 캠페인 후기</li> */}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
