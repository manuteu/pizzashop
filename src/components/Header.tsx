import { Separator } from "@radix-ui/react-separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b">
      <div className="h-16 flex items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="horizontal" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to='/'>
            <Home className="h-4 w-4" />
            Início
          </Link>
          <Link to='/'>
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </Link>
        </nav>

      </div>

    </div>
  )
}
