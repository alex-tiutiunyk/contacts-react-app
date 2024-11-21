import { Link, useParams } from "react-router-dom";

const SinglePage = () => {
  const {id} = useParams();
  return (
    <div>
      <Link to="/contacts-react-app"><strong>Logo</strong></Link>
      <h1>Post #{id}</h1>
    </div>
  )
}

export default SinglePage
