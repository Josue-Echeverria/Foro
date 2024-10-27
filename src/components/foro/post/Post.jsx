import { useParams } from 'react-router-dom';

function Post() {
  const { sedeId, cursoId, postId } = useParams();

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
