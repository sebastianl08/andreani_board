import { CardContext } from "./CardServiceProvider";
import { useContext } from 'react';

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