"use client";

import Board from '@/components/Board'
import {CardServiceProvider} from '@/services/CardService';

export default function Home() {
  return (
    <main>
      <CardServiceProvider>
        <Board />
      </CardServiceProvider>
    </main>
  )
}
