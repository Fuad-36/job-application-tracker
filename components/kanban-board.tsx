"use client";

import { Board } from "@/lib/models/models.types";

interface KanbanBoardProps {
  board: Board; 
  userId: string | undefined;
}

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
  if (!board) {
    return <div>Loading...</div>;
  }
}