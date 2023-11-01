import Card from "@/model/Card";
import Kanban from "@/model/Kanban";
import List from "@/model/List";

export default interface CardServiceInterface
{
    getLists: () => List[];
    getCardsByBoard: (boardId: number) => Card[];
    moveCard: (cardId: number, newBoardId: number) => void;
    createCard: (card: Card) => Kanban;
    checkStorage: () => void;
}