import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css'
function Post() {
  const { sedeId, cursoId, postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  function getPost(postId){ // TODO : Sacar los posts de la base de datos
    return { 
      "id":1
      , "title": "ranking final"
      , "author": "manchitas"
      , "date": "25-10-2024" 
      , "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor. Aliquam erat volutpat. Integer in libero vel odio tincidunt fermentum. Integer ac eros nec nulla lacinia fermentum. Nulla at semper arcu."
      , "comments": [ { "author": "Huog"
                      , "date": "25-10-2024"
                      , "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
                  },{ "author": "Huog"
                    , "date": "25-10-2024"
                    , "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
                } ] 
      }
  }

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching posts
    setTimeout(() => { // Simulate async fetch
      setPost(getPost(postId)); 
      setLoading(false); // Set loading to false after fetching posts
    }, 1000); // Simulated delay
  }, [])

  return (
    <div className='postLong'>
      {loading ? ( 
        <div className="loading"> 
          <h1>Loading...</h1> 
          {/* Replace with your preferred loading icon */}
        </div> 
      ) : (
        <> 
          <div className='postContent'> 
            <div className='user'> 
              <i class="fa-solid fa-user"></i>
              <h3>{post.author}</h3> 
            </div> 
            <div className='bodyLong'>
              <h1>{post.title}</h1>
              <h3>{post.date}</h3>
              <p>{post.body}</p>
            </div>
          </div>
          <div className='postComments'>
            <h2>Comentarios: </h2>
            {post.comments.map((comment) => ( 
              <div >
                {comment.author} {comment.date}
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
