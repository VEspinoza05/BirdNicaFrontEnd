import { useLocation, Link, Outlet, useNavigate } from "react-router-dom"
import BirdNicaLogo from '../assets/BirdNicaLogo.jpg'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Aves", href: "/birds" },
  ]

  const moveToLink = (direction: string) => {
    const currentPosition = navLinks.findIndex(link => link.href === location.pathname)
    let goTo

    if(direction === "previous") {
      goTo = currentPosition - 1
      if (goTo <= -1) 
        goTo = navLinks.length - 1 
    }
    else if(direction === "next") {
      goTo = currentPosition + 1
      if (goTo >= navLinks.length) 
        goTo = 0
    }
    else
      return "invalid parameter"

    return navLinks[goTo].href
  }

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
      <div className="flex bg-[url('https://www.rwandawildlifesafari.com/wp-content/uploads/2024/04/lake-kivu-rwanda-750x450-1.jpg')] bg-cover bg-center h-full w-full">
        <aside className="w-1/3">
        <Button
          onClick={() => navigate(moveToLink("previous"))}
        >
          Previous
        </Button>
        </aside>
        <main className="w-full">
          <Outlet />
        </main>
        <aside className="w-1/3">
          <Button
            onClick={() => navigate(moveToLink("next"))}
          >
            Next
          </Button>  
        </aside>
      </div>
    </div>
  )
}

export default MainLayout