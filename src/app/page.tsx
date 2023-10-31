"use client";

import Board from '@/components/Board'
import ToolBar from '@/components/ToolBar';
import {CardServiceProvider} from '@/services/CardService';

export default function Home() {
  return (
      <CardServiceProvider>
        <ToolBar />
        <Board />
      </CardServiceProvider>
  )
}
