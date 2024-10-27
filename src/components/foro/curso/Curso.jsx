import { useParams, Link } from 'react-router-dom';

function Curso() {
  const { sedeId, cursoId } = useParams();

  return (
    <div id="curso">
      <h1>Curso {cursoId} en Sede {sedeId}</h1>
      <Link to={`/foro/sede/${sedeId}/curso/${cursoId}/post/1`}>Ver Post 1</Link>
    </div>
  );
}

export default Curso;
