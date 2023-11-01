"use client";

import Card from '@/model/Card';
import { DragEventHandler } from 'react';

export default function Card({ card }: { card: Card })
{
    const onDragStart: DragEventHandler<HTMLDivElement> = () => {
        console.log('Inicio ', card.id);
        sessionStorage.setItem('currentCardId', (card.id as number).toString());
    }
    
    const onDragEnd: DragEventHandler<HTMLDivElement> = () => {
        console.log('Termino', card.id);
    }

    return (
        <div draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        >
            <div
            className=" text-white bg-gray-700 p-4 text-center m-8 rounded-3xl border-transparent border shadow-xl text-sm cursor-pointer">
                {card.title}
            </div>
        </div>
    )
}