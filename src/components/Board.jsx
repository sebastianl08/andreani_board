import { useCheckStorage, useGetLists } from "@/services/CardService"
import { useEffect } from 'react';
import CardList from "@/components/CardList";

export default function Board()
{
    const getLists = useGetLists();
    const checkStorage = useCheckStorage();

    useEffect(() => checkStorage, []);

    return (        
        <div className='flex'>
            {
                getLists().map((x, i) => (
                    <CardList {...x} key={i} />
                ))
            }
        </div>
    )
}