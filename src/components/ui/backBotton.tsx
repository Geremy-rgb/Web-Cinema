"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bottom-4 right-4 px-4 py-2 bg-buttoms rounded-2xl"
    >
    Regresar
    </button>
  );
}