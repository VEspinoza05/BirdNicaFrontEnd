import { Link, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
      <header>
        <nav style={{ padding: "10px", background: "#f0f0f0" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Inicio</Link>
          <Link to="/birds" style={{ margin: "0 10px" }}>Aves</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout