import { Cog, LifeBuoy, Search } from "lucide-react"
import { Logo } from "./Logo"
import { MainNavigation } from "./MainNavigation"
import { NavItem } from "./NavItem"
import { UsedSpaceWidget } from "./UsedSpaceWidget"
import { Profile } from "./Profile"

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mt-6 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <div className="w-5 h-5 flex justify-center items-center">
          <Search className="text-zinc-500" />
        </div>
        <input
          type="text"
          className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" Icon={LifeBuoy} />
          <NavItem title="Settings" Icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
