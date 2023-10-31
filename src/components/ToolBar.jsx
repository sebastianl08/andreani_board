import Link from 'next/link'

export default function ToolBar()
{
    return (
        <div
        className="p-5 bg-blue-800 text-white"
        >
            <Link href="/new">Nuevo</Link>

        </div>
    );
}