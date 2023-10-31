"use client";

import { CardServiceProvider } from "@/services/CardService";
import ToolBar from "./ToolBar";
import NewForm from "@/components/NewForm";

export default function New()
{
    return (
        <>
            <CardServiceProvider>
                <ToolBar />
                <NewForm />
            </CardServiceProvider>
        </>
    )
}