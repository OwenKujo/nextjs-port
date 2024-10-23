"use client";

import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // Optionally log errors to an internal logging system
    console.error("Captured error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
