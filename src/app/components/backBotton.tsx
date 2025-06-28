"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bottom-4 bg-[#472426] right-4 px-4 py-2"
    >
    Regresar
    </button>
  );
}