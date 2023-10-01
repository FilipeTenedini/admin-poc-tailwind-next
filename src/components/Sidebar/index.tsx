import { Cog, LifeBuoy, Search } from "lucide-react"
import { Logo } from "./Logo"
import { MainNavigation } from "./MainNavigation"
import { NavItem } from "./NavItem"
import { UsedSpaceWidget } from "./UsedSpaceWidget"
import { Profile } from "./Profile"
import { InputControl, InputPrefix, InputRoot } from "../Input"

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <div className="w-5 h-5 flex justify-center items-center">
            <Search className="text-zinc-500" />
          </div>
        </InputPrefix>
        <InputControl />
      </InputRoot>

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
