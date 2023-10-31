import { useGetCardTree } from "@/services/CardService"

import CardList from "@/components/CardList";

export default function Board()
{
    const getCardTree = useGetCardTree();

    return (        
        <div data-component='board' className='flex'>
            {
                getCardTree().map((x, i) => (
                    <CardList title={x.board} items={x.cards} key={i} />
                ))
            }
        </div>
    )
}