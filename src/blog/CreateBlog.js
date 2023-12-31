import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompCreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const navigate = useNavigate();

  // Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title, content, createdAt, updatedAt });
    navigate('/');
  };

  return (
    <div>
      <h3>Creación de materia</h3>
      <form onSubmit={store}>
        <div>
          <label className='form-label'>Materia:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div >
          <label className='form-label'>Descripcion:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Fecha de Inicio De Curso</label>
          <input
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Crear
        </button>
      </form>
    </div>
  );
};

export default CompCreateBlog;