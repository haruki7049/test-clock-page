'use client'

import { useEffect, useState } from 'react';

export default function Page() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <main>
      <div>{ date.toLocaleString() }</div>
    </main>
  );
}
