"use client";

import { useCheckStorage, useCreateCard, useGetLists } from "@/services/CardService";
import { useState, useEffect } from 'react';

export default function NewForm()
{
    const getLists = useGetLists();
    const createCard = useCreateCard();
    const checkStorage = useCheckStorage();

    const [formState, setFormState] = useState({
        title: '',
        boardId: 1
    });

    useEffect(() => checkStorage, []);

    const getFormStateValue = (key) => formState[key]

    const updateFormState = (key, val) => 
    {
        const prevState = Object.assign({}, formState);
        
        prevState[key] = val;

        setFormState(prevState);
    }

    const updateFormStateByEventHandler = (key) => (e) => updateFormState(key, e.target.value);

    const submitForm = (e) => 
    {
        e.preventDefault();

        const newState = createCard(formState);

        location.href = "/"
    }

    return (            
    <div className="flex justify-center mt-5">
        <form className="w-full max-w-sm" onSubmit={submitForm}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Titulo
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={updateFormStateByEventHandler('title')} value={getFormStateValue('title')} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Tablero
                </label>
                </div>
                <div className="md:w-2/3 relative">
                    <select onChange={updateFormStateByEventHandler('boardId')} value={getFormStateValue('boardId')} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {
                        getLists().map((x, i) => (
                            <option key={i} value={x.id}>{x.title}</option>
                        ))
                    }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Crear Tarea
                </button>
                </div>
            </div>
        </form>
    </div>
    );
}