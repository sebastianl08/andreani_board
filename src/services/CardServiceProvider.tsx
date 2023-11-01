import { createContext, useState } from 'react';
import Card from '@/model/Card';
import List from '@/model/List';
import Kanban from '@/model/Kanban';

import CardServiceInterface from './CardServiceInterface';
import CardServiceBuilder from './CardServiceBuilder';

const initialState: CardServiceInterface =
{
    getLists: function (): List[] {
        return [];
    },
    getCardsByBoard: function (boardId: number): Card[] {
        return [];
    },
    moveCard: function (cardId: number, newBoardId: number): void {
    },
    createCard: function (card: Card): Kanban {
        return { cards: [], lists: [] };
    },
    checkStorage: function (): void {
    }
}

export const CardContext = createContext<CardServiceInterface>(initialState);

export const CardServiceProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) =>
{
    const [items, setItems] = useState<Kanban>({
        lists: [
            { id: 1, title: 'To Do' },
            { id: 2, title: 'Doing' },
            { id: 3, title: 'Done' },
        ],
        cards: [
            { id: 1, title: 'Card 1', boardId: 1 },
            { id: 2, title: 'Card 2', boardId: 1 },
            { id: 3, title: 'Card 3', boardId: 1 },
            { id: 4, title: 'Card 4', boardId: 2 },
            { id: 5, title: 'Card 5', boardId: 2 },
            { id: 6, title: 'Card 6', boardId: 2 },
            { id: 7, title: 'Card 7', boardId: 3 },
            { id: 8, title: 'Card 8', boardId: 3 },
            { id: 9, title: 'Card 9', boardId: 3 },
        ]
    });

    const cardService = CardServiceBuilder(items, setItems);

    return (
        <CardContext.Provider value={cardService} children={children} />
    );
}