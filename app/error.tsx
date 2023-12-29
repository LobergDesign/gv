"use client";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState({ a: { b: { c: "BREAKING" } } });
  return (
    <div>
      <div>{state.a.b.c}</div>
      <div>
        <button onClick={(e) => setState({})}>Break this</button>
      </div>
    </div>
  );
}
