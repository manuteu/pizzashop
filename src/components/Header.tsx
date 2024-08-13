import { Separator } from "./ui/separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import NavLink from "./NavLink";
import ThemeToggle from "./theme/ThemeToggle";
import AccountMenu from "./AccountMenu";

export default function Header() {
  return (
    <div className="border-b">
      <div className="h-16 flex items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex flex-1  items-center space-x-4 lg:space-x-6">
          <NavLink to='/'>
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to='/orders'>
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>

    </div>
  )
}
