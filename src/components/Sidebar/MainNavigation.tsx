import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users
} from "lucide-react"
import { NavItem } from "./NavItem"

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" Icon={Home} />
      <NavItem title="Dashboard" Icon={BarChart} />
      <NavItem title="Projects" Icon={SquareStack} />
      <NavItem title="Tasks" Icon={CheckSquare} />
      <NavItem title="Reporting" Icon={Flag} />
      <NavItem title="Users" Icon={Users} />
    </nav>
  )
}
