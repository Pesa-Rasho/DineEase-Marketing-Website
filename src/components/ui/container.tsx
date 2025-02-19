
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}
