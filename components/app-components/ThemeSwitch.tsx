"use client"
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch"
import {Label} from "@/components/ui/label";
import Form from "next/form";
import {useContext} from "react";
export function  ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    return (

        <div className="w-[6%] flex items-center justify-center bg-[var(--background)]  p-[2px]">
            <Label htmlFor={"theme-swicth"} className={"text-[var(--foreground)] "}>Tema</Label>
            <Switch name={"theme-swicth"} id={"theme-swicth"} checked={theme === "dark"} onCheckedChange={()=>{
                console.log("theme-swicth", theme);
                if(theme === "dark"){
                    setTheme("light");
                }
                else{
                    setTheme("dark");
                }
                }}/>
        </div>
    );
}