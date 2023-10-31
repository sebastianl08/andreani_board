"use client";

import { useState, useRef } from 'react';

export default function Card({ card })
{
    const [movingState, setMovingState] = useState({ isMoving: false, offset: [] });
    const movingDiv = useRef(null);

    const onDragStart = (e) => {
        console.log('Inicio ', card.id);
        sessionStorage.setItem('currentCardId', card.id);
    }
    
    const onDragEnd = (e) => {
        console.log('Termino', card.id);
    } 

    const onMouseDown = (e) => {
        setMovingState({
            isMoving: true,
            offset: [
                movingDiv.current.offsetLeft - e.clientX,
                movingDiv.current.offsetTop - e.clientY,
            ]
        })
    }

    const onMouseUp = (e) => {
        setMovingState({
            isMoving: false,
            offset: []
        })
    }

    const onMouseMove = (e) => {
        e.preventDefault();
        if (movingState.isMoving) {
            movingDiv.current.style.left = (e.clientX + movingState.offset[0]) + 'px';
            movingDiv.current.style.top = (e.clientY + movingState.offset[1]) + 'px';
        }
    }

    return (
        <div draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        ref={movingDiv}
        >
            <div
            className=" text-white bg-gray-700 p-4 text-center m-8 rounded-3xl border-transparent border shadow-xl text-sm cursor-pointer">
                {card.title}
            </div>
        </div>
    )
}