import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { init } from '@paralleldrive/cuid2';
import {auth} from "@/lib/Security/auth";
import {redirect} from "next/navigation";
import {UserRepository} from "@/lib/Repository/UserRepository";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateUUID(): () => string {
  return  init({
    random: Math.random,
    length: 10,
    fingerprint:process.env.FGPRINT
  });
}


