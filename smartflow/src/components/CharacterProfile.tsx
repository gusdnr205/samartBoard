import React from "react";

type Props = {
  character: {
    CharacterImage: string;
    CharacterName: string;
    CharacterClassName: string;
    ItemAvgLevel: string;
    GuildName: string;
    ServerName: string;
  };
};

export default function CharacterProfile({ character }: Props) {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg max-w-xl mx-auto mt-8">
      <img
        src={character.CharacterImage}
        alt={`${character.CharacterName} 이미지`}
        className="rounded-lg mb-4 w-full max-h-[400px] object-contain border border-gray-700"
      />
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-semibold text-orange-400">이름:</span>{" "}
          {character.CharacterName}
        </div>
        <div>
          <span className="font-semibold text-orange-400">직업:</span>{" "}
          {character.CharacterClassName}
        </div>
        <div>
          <span className="font-semibold text-orange-400">서버:</span>{" "}
          {character.ServerName}
        </div>
        <div>
          <span className="font-semibold text-orange-400">평균 아이템 레벨:</span>{" "}
          {character.ItemAvgLevel}
        </div>
        <div>
          <span className="font-semibold text-orange-400">길드:</span>{" "}
          {character.GuildName}
        </div>
      </div>
    </div>
  );
}
