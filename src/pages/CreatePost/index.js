import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import styles from './createpost.module.css';
import { useInsertDocument } from '../../hooks/useInsertDocument';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const { insertDocument, response } = useInsertDocument("posts");
  //pega o código de autenticação do usuário
  const { user } = useAuthValue();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError("");

    await insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })
    navigate('/')
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder='Pense em um bom título'
            onChange={(e) => setTitle(e.target.value)}
            value={title} />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder='Insira uma imagem que representa o seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image} />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body} />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder='Insira as tags separadas por vírgulas'
            onChange={(e) => setTags(e.target.value)}
            value={tags} />
        </label>
        {!response.loading && <button className='btn'>Postar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
      </form>
    </div>
  )
}