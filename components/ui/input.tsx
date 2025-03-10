import * as React from "react"
import {ReactInputProps} from "@/lib/Types";
import { cn } from "@/lib/utils"
import {cva} from "class-variance-authority";

function Input({variant,btnSize,className, type, ...props }:ReactInputProps) {

    const btnvariants = cva("rounded-s-2xl h-5",{
        variants:{
            variant:{
                default: "flex items-center justify-center text-black",
            },
            btnSize:{
                default:"w-full"
            }
        },
        defaultVariants:{variant:"default",btnSize:"default"}
    })
  return (
    <input
      type={type}
      data-slot="input"
      className={cn((btnvariants({variant, btnSize}),className))}
      {...props}
    />
  )
}

export { Input }
