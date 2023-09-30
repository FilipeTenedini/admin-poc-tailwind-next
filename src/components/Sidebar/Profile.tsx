import { LogOut } from "lucide-react"
import Image from "next/image"

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/filipetenedini.png"
        alt="github profile pic"
        className="rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Filipe Tenedini
        </span>
        <span className="truncate text-sm text-zinc-500">
          tenedinifilipe@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <div className="w-5 h-5">
          <LogOut className="text-zinc-500" />
        </div>
      </button>
    </div>
  )
}
