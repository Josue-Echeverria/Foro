import { useParams } from 'react-router-dom';

function Post() {
  const { sedeId, cursoId, postId } = useParams();

  function getPosts(curso){ // TODO : Sacar los posts de la base de datos
    return[
        { "id":1
            , "title": "ranking final"
            , "author": "manchitas"
            , "date": "25-10-2024" 
            , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor. Aliquam erat volutpat. Integer in libero vel odio tincidunt fermentum. Integer ac eros nec nulla lacinia fermentum. Nulla at semper arcu."
            , "comments": [ { "author": "Huog"
                            , "date": "25-10-2024"
                            , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
                        } ] 
        },
        { "id":2
            , "title": "ranking final"
            , "author": "manchitas"
            , "date": "25-10-2024" 
            , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor. Aliquam erat volutpat. Integer in libero vel odio tincidunt fermentum. Integer ac eros nec nulla lacinia fermentum. Nulla at semper arcu."
            , "comments": [ { "author": "Huog"
                            , "date": "25-10-2024"
                            , "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mi at aliquam condimentum, est libero elementum ante, a facilisis metus purus eu sem. Nulla facilisi. Suspendisse potenti. Vestibulum scelerisque, purus sit amet pharetra fermentum, tortor nunc egestas sem, in dapibus risus libero ac libero. Suspendisse potenti. Aliquam erat volutpat. Suspendisse potenti. Vivamus eget rhoncus orci. Sed quis nunc sed nunc posuere vehicula. Sed sit amet eros in felis fermentum gravida. Nullam ac mauris nec purus volutpat fermentum. Quisque vitae ligula eget eros efficitur egestas. Nam in suscipit risus. Donec et dolor sit amet orci pharetra porttitor."
            
                        } ] 
        }
    ]
}
  return (
    <div>
      <h1>Post {postId}</h1>
      <p>Sede: {sedeId}</p>
      <p>Curso: {cursoId}</p>
      
      {/* Aquí podrías cargar contenido real del post según el `postId` */}
      <p>Contenido del post {postId} en el curso {cursoId} de la sede {sedeId}.</p>
      
      {/* Ejemplo adicional: puedes incluir lógica de carga de datos */}
      {/* <FetchPostData sedeId={sedeId} cursoId={cursoId} postId={postId} /> */}
    </div>
  );
}

export default Post;
