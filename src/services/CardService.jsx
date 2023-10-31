import { createContext, useContext, useState } from 'react';

const CardContext = createContext({});

export const CardServiceProvider = ({ children }) =>
{
    const [items, setItems] = useState({
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

    const providerValue = {

        getLists() {
            return items.lists;
        },

        getCardsByBoard(boardId) {
            return items.cards.filter(x => x.boardId == boardId);
        },
        
        moveCard(cardId, newBoardId) {
            let prevState = Object.assign({}, items);

            prevState.cards = prevState.cards.map(x => 
            {
                if (x.id == cardId) x.boardId = newBoardId;
                return x;
            });

            setItems(prevState);

            providerValue.updateStorage();
        },

        generateNewId() {
            return items.cards.length + 1;
        },

        createCard(card) {
            let prevState = Object.assign({}, items);

            prevState.cards.push({
                id: providerValue.generateNewId(),
                title: card.title,
                boardId: card.boardId
            });

            setItems(prevState);

            providerValue.updateStorage();

            return prevState;
        },

        checkStorage() {
            if (sessionStorage.getItem('CARDS')) {
                setItems(JSON.parse(sessionStorage.getItem('CARDS')));
            }
        },

        updateStorage()
        {
            sessionStorage.setItem('CARDS', JSON.stringify(items));
        }

    }

    return (
        <CardContext.Provider value={providerValue} children={children} />
    );
}

export const useGetLists = () =>
{
    const ctx = useContext(CardContext);
    return ctx.getLists;   
}

export const useGetCardsByBoard = () => 
{
    const ctx = useContext(CardContext);
    return ctx.getCardsByBoard;
}

export const useMoveCard = () =>
{
    const ctx = useContext(CardContext);
    return ctx.moveCard;
}

export const useCreateCard = () =>
{
    const ctx = useContext(CardContext);
    return ctx.createCard;
}

export const useCheckStorage = () =>
{
    const ctx = useContext(CardContext);
    return ctx.checkStorage;
}