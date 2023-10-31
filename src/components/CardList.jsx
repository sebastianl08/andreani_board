"use client";

import Card from "@/components/Card";
import { useMoveCard } from "@/services/CardService";

export default function CardList({ title, items })
{
    const moveCard = useMoveCard();

    const onDragEnter = (e) => {
        const cardId = sessionStorage.getItem('currentCardId');
        const newBoard = title;

        moveCard(cardId, newBoard);
    }

    const onDrop = (e) => {
        console.log('Dropping to', title);
    }

    return (
        <div
        className='border-transparent m-4 border-2 w-1/4 rounded-3xl bg-gray-900 text-white'> 
            <h2
            className="text-center my-6"
            >{title}</h2>

                <div className="py-1"
                onDragEnter={onDragEnter}
                onDrop={onDrop}
                >
                    {
                        items.map((x, i) => (
                            <Card card={x} key={i} />
                        ))
                    }
                </div>

        </div>
    );
}
