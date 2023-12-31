import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')   
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content,
            createdAt: createdAt,
            updatedAt: updatedAt
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
        setCreatedAt(res.data.createdAt)
        setUpdatedAt(res.data.updatedAt)
    }

    return (
        <div>
        <h3>Actualizar Materia</h3>
        <form onSubmit={update}>
            <div>
                <label className="form-label">Materia:</label>
                <br></br>
                <label  
                    type="text"
                    className="form-label">{title}</label>
            </div>
            <div>
                <label  className="form-label">Descripción:</label>
                <textarea
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Inicio De Curso</label>
                <input
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    type="date"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditBlog;