"use client";

import Image from "next/image";
import { BsFacebook, BsTwitterX } from "react-icons/bs";

type Props = {
  name: string;
  role: string;
  position?: string;
  image: string;
};

export default function MemberCard({ name, role, position, image }: Props) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow transition-all duration-300 hover:bg-[#634AFF0D] hover:shadow-lg">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full border-4 border-white shadow-sm"
      />
      <p className="mt-2 text-sm font-bold text-black">{name}</p>
      <p className="text-purple py-1 text-xs">{role}</p>
      {position && <p className="text-gray-500 text-xs">{position}</p>} 
      <div className="mt-1 flex items-center justify-center gap-2 text-xs text-gray-400">
        <BsFacebook />
        <BsTwitterX />
      </div>
    </div>
  );
}
