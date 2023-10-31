"use client";

import Card from "@/components/Card";
import { useMoveCard, useGetCardsByBoard } from "@/services/CardService";

export default function CardList({ title, id })
{
    const moveCard = useMoveCard();
    const getCardsByBoard = useGetCardsByBoard();

    const onDragOver = (e) => {
        e.preventDefault();

        const cardId = sessionStorage.getItem('currentCardId');
        const newBoard = id;

        moveCard(cardId, newBoard);
    }

    const onDrop = (e) => {
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
