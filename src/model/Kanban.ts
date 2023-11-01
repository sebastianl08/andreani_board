import Card from "./Card";
import List from "./List";

export default interface Kanban
{
    cards: Card[];
    lists: List[];
}