import React from "react";
import "./SessaoHeader.css";

const SessaoHeader = () => {
    return (
        <div className="sessao-header">
            <div className="sessao-titulo">
                <span>
                    28/04/2026 43ª - Sessão Deliberativa Ordinária - Plenário do
                    Senado Federal
                </span>

                <span className="status">Encerrada</span>
            </div>

            <div className="sessao-navegacao">
                <a href="#">❮ Sessão anterior</a>

                <a href="#">Outra sessão 📅</a>

                <a href="#">Próxima sessão ❯</a>
            </div>

            <div className="sessao-info">
                <span className="inicio">
                    🟢 Início da Sessão: 14:10
                </span>

                <span className="fim">
                    🔴 Término da Sessão: 19:03
                </span>
            </div>
        </div>
    );
};

export default SessaoHeader;