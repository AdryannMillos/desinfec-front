import React from "react";
import '../css/service-sheet.css'

const ServiceSheet = () => {
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
            <hr/>
            <input type="submit" placeholder="Pesquise por serviço ou cliente" value='' />
        </div>
    )
}

export default ServiceSheet;