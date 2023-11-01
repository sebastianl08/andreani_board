"use client";

import Card from "@/components/Card";
import List from "@/model/List";
import { useMoveCard, useGetCardsByBoard } from "@/services/CardServiceHooks";
import { DragEventHandler } from 'react';

export default function CardList({ title, id }: List)
{
    const moveCard = useMoveCard();
    const getCardsByBoard = useGetCardsByBoard();

    const onDragOver: DragEventHandler<HTMLDivElement> = (e: any) => {
        e.preventDefault();

        const cardId = sessionStorage.getItem('currentCardId');
        const newBoard = id;

        if (cardId != null)
            moveCard(Number(cardId), newBoard);
    }

    const onDrop: DragEventHandler<HTMLDivElement> = (e: any) => {
        e.preventDefault();
    }

    return (
        <div
        className='
        border-transparent m-4 border-2 w-1/4 rounded-3xl bg-gray-900 text-white py-1 h-fit custom-scroll overflow-y-scroll'
        onDragOver={onDragOver}
        onDrop={onDrop}> 
            <h2
            className="text-center my-6"
            >{title}</h2>
            <div>
                {
                    getCardsByBoard(id).map((x, i) => (
                        <Card card={x} key={i} />
                    ))
                }
            </div>
        </div>
    );
}
