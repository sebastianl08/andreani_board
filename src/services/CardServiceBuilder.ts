import Kanban from "@/model/Kanban";
import Card from "@/model/Card";
import CardServiceInterface from "./CardServiceInterface";
import {Dispatch, SetStateAction} from 'react';

const CardServiceBuilder = (items: Kanban, setItems:  Dispatch<SetStateAction<Kanban>>): CardServiceInterface =>
{
    const result = {

        getLists() {
            return items.lists;
        },

        getCardsByBoard(boardId: number) {
            return items.cards.filter(x => x.boardId == boardId);
        },
        
        moveCard(cardId: number, newBoardId: number) {
            let prevState = Object.assign({}, items);

            prevState.cards = prevState.cards.map(x => 
            {
                if (x.id == cardId) x.boardId = newBoardId;
                return x;
            });

            setItems(prevState);

            result.updateStorage();
        },

        generateNewId() {
            return items.cards.length + 1;
        },

        createCard(card: Card) {
            let prevState = Object.assign({}, items);

            prevState.cards.push({
                id: result.generateNewId(),
                title: card.title,
                boardId: card.boardId
            });

            setItems(prevState);

            result.updateStorage();

            return prevState;
        },

        checkStorage() {
            if (sessionStorage.getItem('CARDS')) {
                setItems(JSON.parse(sessionStorage.getItem('CARDS') as string));
            }
        },

        updateStorage()
        {
            sessionStorage.setItem('CARDS', JSON.stringify(items));
        }

    }

    return result;
}

export default CardServiceBuilder;