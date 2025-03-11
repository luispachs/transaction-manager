import {ThemeSwitch} from "@/components/app-components/ThemeSwitch";
export function GeneralHeader() {
    return (
        <div className="w-full flex items-center justify-end bg-[var(--background)]  p-[5px]" >
            <ThemeSwitch  />
        </div>
    );
}