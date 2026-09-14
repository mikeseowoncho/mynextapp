"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-2 p-3 border rounded-lg">
      <span>count: {count}</span>
      <button
        onClick={() => setCount((c) => c - 1)}
        className="px-2 py-1 bg-zinc-200 rounded"
      >
        -1
      </button>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-2 py-1 bg-black text-white rounded"
      >
        +1
      </button>
      <button onClick={() => setCount(0)} className="px-2 py-1 border rounded">
        reset
      </button>
    </div>
  );
}
