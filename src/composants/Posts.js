
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Posts = () => {
    const [donnees,setDonnees] = useState([]) ;
    const params = useParams();
    const location = useLocation() ;
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}` ;
    axios.get(postUrl)
    .then(res => setDonnees(res.data))
    .catch(err => console.log(err))
  return (
    <div className="Posts">
      {donnees.map(el => (
        <div className="card border-info mb-3" key={el.id}>
          <Link to = {`/comments/${el.id}`} state = {el} style = {{textDecoration : 'none', color : 'gray'}}>
            <div className="card-header">{location.state} <i class="fa-solid fa-comment"></i></div>
            <div className="card-body" style={{borderColor : 'green'}}>
              <h6 className = 'card-title'>{el.title}</h6>
              <p className="card-text">{el.body}</p>
            </div>
          </Link>
        </div>
      ))
      }</div>  )
}

export default Posts ;