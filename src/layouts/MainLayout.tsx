import { useLocation, Link, Outlet } from "react-router-dom"
import BirdNicaLogo from '../assets/BirdNicaLogo.jpg'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

function MainLayout() {
  const location = useLocation()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Aves", href: "/birds" },
    { name: "Reservas", href: "/reserves" },
    { name: "Cursos", href: "/courses" },
    { name: "Calendario", href: "/calendar" },
    { name: "Contacto", href: "/contact" },
  ]

  return (
    <div className="flex flex-col h-screen">
      <header className="p-[8px]">
        <nav className="w-full flex">
          <img className="w-24 h-24" src={BirdNicaLogo} alt="Logo de BirdNica"/>
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild 
                      className={`px-4 py-2 relative ${
                        isActive
                          ? "text-green-600 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-600"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className="bg-[url('https://www.rwandawildlifesafari.com/wp-content/uploads/2024/04/lake-kivu-rwanda-750x450-1.jpg')] bg-cover bg-center h-full w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout