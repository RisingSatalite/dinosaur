"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs`);
      const allDinosaurs = await response.json();
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ul>
        {dinosaurs.map((dinosaur) => {
          return (
            <li key={dinosaur.name}>
              <Link href={`/${dinosaur.name.toLowerCase()}`}>
                {dinosaur.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}