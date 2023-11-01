"use client";

import { CardServiceProvider } from "@/services/CardServiceProvider";
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