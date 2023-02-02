import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTimes, FaExclamation } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import {
  AlunoActions,
  AlunoContainer,
  AlunoInfo,
  ProfilePicture,
  NovoAluno,
} from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rowDelete, setRowDelete] = useState(-1);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e, index) => {
    e.preventDefault();
    setRowDelete(index);
    setTimeout(() => {
      setRowDelete(-1);
    }, 3000);
  };
  const handleDelete = async (e, alunoID) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.delete(`/alunos/${alunoID}`);
      e.target.closest('.alunoContainer').remove();
      setIsLoading(false);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      const status = get(error, 'response.status', []);

      errors.map((err) => toast.error(err));

      if (status === 401) {
        toast.error('Você preicsa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
      {alunos.map((aluno, index) => (
        <AlunoContainer className="alunoContainer" key={String(aluno.id)}>
          <div>
            <div>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
            </div>
            <AlunoInfo>
              <p>{aluno.nome}</p>
              <span>{aluno.email}</span>
            </AlunoInfo>
          </div>
          <AlunoActions>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={24} />
            </Link>
            {rowDelete !== index ? (
              <Link to="#" onClick={(e) => handleDeleteAsk(e, index)}>
                <FaTimes size={24} />
              </Link>
            ) : (
              <Link to="#" onClick={(e) => handleDelete(e, aluno.id)}>
                <FaExclamation size={24} />
              </Link>
            )}
          </AlunoActions>
        </AlunoContainer>
      ))}
    </Container>
  );
}
