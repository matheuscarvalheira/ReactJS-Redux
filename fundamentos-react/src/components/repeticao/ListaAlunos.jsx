import React from 'react';
import alunos from '../../data/alunos';

export default props => {
  //percorre o array e mostra cada atributo do meu objeto aluno, dentro do Array
  const alunosLI = alunos.map(aluno => {
    return <li key={aluno.id}>{aluno.id}) {aluno.nome} : {aluno.nota}</li>
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {alunosLI}
      </ul>
    </div>
  );
}