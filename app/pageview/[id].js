"use client";

import { useRouter } from "next/router";

export default function Pageview() {
  const router = useRouter();

  return (
    <div>
      <h1>Work in progress</h1>
      <div>book id : {router.query.id}</div>
    </div>
  );
}
