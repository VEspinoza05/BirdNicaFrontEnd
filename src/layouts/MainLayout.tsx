import { useLocation, Link, Outlet, useNavigate } from "react-router-dom"
import BirdNicaLogo from '../assets/BirdNicaLogo.jpg'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


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
      <div className="relative flex bg-[url('https://www.rwandawildlifesafari.com/wp-content/uploads/2024/04/lake-kivu-rwanda-750x450-1.jpg')] bg-cover bg-center h-full w-full ">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-white flex w-full">
          <aside className="w-1/3 flex justify-center items-center">
            <BsArrowLeftCircle
              size={96}
              className="cursor-pointer text-white hover:text-gray-300"
              onClick={() => navigate(moveToLink("previous"))}
            />
          </aside>
          <main className="w-full">
            <Outlet />
          </main>
          <aside className="w-1/3 flex justify-center items-center">
            <BsArrowRightCircle
              size={96}
              className="cursor-pointer text-white hover:text-gray-300"
              onClick={() => navigate(moveToLink("next"))}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default MainLayout