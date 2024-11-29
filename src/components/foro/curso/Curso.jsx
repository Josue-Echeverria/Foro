import { useEffect, useState } from 'react'; 
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import './Curso.css'

function Curso() { 
  const { sedeId, cursoId } = useParams(); 
  const [posts, setPosts] = useState(null); // Use `null` to signify loading
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate(); 
  
  function getPosts() { 
    return [ 
      { 
        id: 1, 
        title: 'Post 1', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        author: 'John Doe' ,
        date: '25 octubre'
      }, 
      { 
        id: 2, 
        title: 'Post 2', 
        body: 'Another example post content.it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut', 
        author: 'Jane Smith',
        date: '25 octubre'
      } 
    ]; 
  } 
  
  useEffect(() => { 
    if (cursoId === undefined) { 
      navigate(`/foro/sede/${sedeId}`); 
    } else { 
      setLoading(true); // Set loading to true before fetching posts
      setTimeout(() => { // Simulate async fetch
        setPosts(getPosts(cursoId)); 
        setLoading(false); // Set loading to false after fetching posts
      }, 1000); // Simulated delay
    } 
  }, []); 
  
  return ( 
    <div id="curso"> 
      {loading ? ( 
        <div className="loading"> 
          <h1>Loading...</h1> 
          {/* Replace with your preferred loading icon */}
        </div> 
      ) : ( 
        posts.length > 0 ? ( 
          posts.map((post) => ( 
            <div className='post' key={post.id}> 
              <div className='user'> 
                <i class="fa-solid fa-user"></i>
                <h3>{post.author}</h3> 
              </div> 
              <div className='body'> 
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div> 
            </div> 
          )) 
        ) : ( 
          <h1>No hay publicaciones en este curso</h1> 
        ) 
      )} 

      <h1>Curso {cursoId} en Sede {sedeId}</h1> 
      <Link to={`/foro/sede/${sedeId}/curso/${cursoId}/post/1`}>Ver Post 1</Link> 
    </div> 
  ); 
} 

export default Curso;
