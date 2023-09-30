import { ElementType, ReactElement } from "react"
import { ChevronDown } from "lucide-react"

interface NavItemProps {
  title: string
  Icon: ElementType
}
export function NavItem({ title, Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <div className="h-5 w-5 flex justify-center items-center">
        <Icon className="text-zinc-500" />
      </div>
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <div className="h-5 w-5 flex justify-center items-center ml-auto">
        <ChevronDown className="text-zinc-400 group-hover:text-violet-300" />
      </div>
    </a>
  )
}
