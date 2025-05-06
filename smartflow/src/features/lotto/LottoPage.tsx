import { useLotto } from "src/features/lotto/useLotto";

export default function LottoPage() {
  const { numbers, draw } = useLotto();

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">로또 번호 추첨기</h1>
      <div className="flex gap-2">
        {numbers.map((num, idx) => (
          <div key={idx} className="rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center">
            {num}
          </div>
        ))}
      </div>
      <button onClick={draw} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        번호 추첨!
      </button>
    </div>
  );
}
