import { createContext } from "react";

export const AppContext = createContext();

const fetchDadosEventosLegislativos = async (sessao) => {
    try{
        const response = await fetch(`https://www6g.senado.leg.br/dados-eventos-legislativos/resources/sessao/recuperar-sessao?codigoSessao=${sessao}`)
        const data = response.data;
    } catch(e) {
        console.log(e);
    }
}

export const AppProvider = ({ children }) => {
    <AppContext.Provider value={{ fetchDadosEventosLegislativos }} >
        {children}
    </AppContext.Provider>
};