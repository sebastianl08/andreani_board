"use client";

export default function Card({ card })
{
    const onDragStart = (e) => {
        console.log('Inicio ', card.id);
        sessionStorage.setItem('currentCardId', card.id);
    }
    
    const onDragEnd = (e) => {
        console.log('Termino', card.id);
    } 

    return (
        <div draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}>
            <div
            className=" text-white bg-gray-700 p-4 text-center m-8 rounded-3xl border-transparent border shadow-xl text-sm cursor-pointer">
                {card.title}
            </div>
        </div>
    )
}