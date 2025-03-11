"use client"
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch"
import {Label} from "@/components/ui/label";

export function  ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Label htmlFor={"theme-swicth"} className={"text-[var(--foreground)] text-base/8 mx-2"}>Tema</Label>
            <Switch name={"theme-swicth"} id={"theme-swicth"} checked={theme === "dark"} onCheckedChange={()=>{
                console.log("theme-swicth", theme);
                if(theme === "dark"){
                    setTheme("light");
                }
                else{
                    setTheme("dark");
                }
                }}/>
        </>
    );
}