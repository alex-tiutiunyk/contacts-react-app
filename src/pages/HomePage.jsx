import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link path="/contacts-react-app/15">Post</Link>
    </div>
  )
}

export default HomePage
