import { createContext, useContext, useState } from 'react';

const CardContext = createContext({});

export const CardServiceProvider = ({ children }) =>
{
    const [items, setItems] = useState([
        { id: 1, title: 'Card 1', board: 'To Do' },
        { id: 2, title: 'Card 2', board: 'To Do' },
        { id: 3, title: 'Card 3', board: 'To Do' },
        { id: 4, title: 'Card 4', board: 'Doing' },
        { id: 5, title: 'Card 5', board: 'Doing' },
        { id: 6, title: 'Card 6', board: 'Doing' },
        { id: 7, title: 'Card 7', board: 'Done' },
        { id: 8, title: 'Card 8', board: 'Done' },
        { id: 9, title: 'Card 9', board: 'Done' },
    ]);

    return (
        <CardContext.Provider value={{

            getCardTree() {
                const groups = items.reduce((group, x) =>
                {
                    group[x['board']] = group[x['board']] || [];
                    group[x['board']].push(x);
                    return group;
                }, {});

                const output = [];

                for (const key in groups) {
                    output.push({
                        board: key,
                        cards: groups[key]
                    })
                }

                return output;
            },
            
            moveCard(cardId, newBoard) {
                let prevState = [...items];

                prevState = prevState.map(x => 
                {
                    if (x.id == cardId) x.board = newBoard;
                    return x;
                });

                setItems(prevState);
            }

        }} children={children} />
    );
}

export const useMoveCard = () =>
{
    const ctx = useContext(CardContext);
    return ctx.moveCard;
}

export const useGetCardTree = () => 
{
    const ctx = useContext(CardContext);
    return ctx.getCardTree;
}

