import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/contacts-react-app"><strong>Logo</strong></Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2024 Footer content</footer>
    </>
  )
}

export default Layout
