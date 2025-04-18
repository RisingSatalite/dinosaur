"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dinosaur({ params }) {
    const selectedDinosaur = params.then((params) => params.dinosaur);
    const [dinosaur, setDino] = useState({});

    useEffect(() => {
    (async () => {
        const resp = await fetch(`/api/dinosaurs/${await selectedDinosaur}`);
        const dino = await resp.json();
        setDino(dino);
    })();
    }, []);

    return (
        <main>
          <h1>{dinosaur.name}</h1>
          <p>{dinosaur.description}</p>
          <Link href="/">🠠 Back to all dinosaurs</Link>
        </main>
      );
}
