import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to Smart Flow</h1>
      <p className="mt-2 text-gray-600">로또 번호 추첨기를 사용해보세요.</p>

      <Link
        to="/lotto"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        로또 추첨하러 가기 →
      </Link>
    </div>
  );
}
