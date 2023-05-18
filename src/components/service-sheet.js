import React, { useState } from "react";
import axios from "axios";
import {cliente,servico,funcionario} from 'data'
import '../css/service-sheet.css'

const ServiceSheet = () => {

    const[results,setResults] = useState();

    const getData = (value, url) => {

        axios.get(url)
        .catch((err) => {
            console.log(err);
        }).then((res) => {

            const results = res['data'].data.filter((data) => {

                return value&&data&&data.nome.toLowerCase().includes(value.toLowerCase());
            })
            setResults(results);
        })
    };

    return (
        <div className="container">
            <form className="form-container">
                <div className="form-data">
                    <span>Nº do serviço:</span>
                    <input type="text" required />

                    <span>Data:</span>
                    <input type="date" required />
                </div>

                <div className="form-complement">
                    <span>Tipo de serviço:</span>
                    <input type="text" required />
                </div>

                <div className="form-complement">
                    <span>Horário:</span>
                    <input type="text" required />
                </div>

                <div className="form-complement">
                    <span>Endereço:</span>
                    <input type="text" required />
                </div>

                <div className="form-complement">
                    <span>Cliente:</span>
                    <input type="text" required />
                </div>

                <div className="form-complement">
                    <span>Telefone:</span>
                    <input type="text" required />
                </div>

                <div className="form-complement">
                    <span>Responsável:</span>
                    <input type="text" required />
                </div>

                <div className="schedule">
                    <button type="submit">Agendar</button>
                </div>
            </form>

            <hr></hr>

            <input className="search" type="text" placeholder="Pesquise por serviço ou cliente" value='' />
        </div>
    )
}

export default ServiceSheet;