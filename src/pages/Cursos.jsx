import React, { useEffect, useState } from 'react'
import { getCursos } from '../helpers/rutaCursos'

import '../css/cursos.css'

const Cursos = () => {

    const [cursos, setCursos] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getCursos().then(cursos => {
            setCursos({
                data: cursos,
                loading: false
            })
        })

    }, [])





    return (

        <div className="container">
            <div className="row">
                <div className="col text-center my-5 ">
                    <h3>Conoce nuestros cursos</h3>
                </div>
            </div>
            <div className="row">

                {cursos.data.map(curso => {
                    return (

                        <div className="col-3">
                            <div className="card">
                                <img src={curso.imagen} className="card-img-top" alt={curso.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{curso.title}</h5>
                                    <img className="avatar" src={curso.img_mentor} alt={curso.mentor} />
                                    <span>{curso.mentor}</span>

                                </div>
                            </div>
                        </div>
                    )
                })
                }





            </div>

        </div>
    )
}

export default Cursos
