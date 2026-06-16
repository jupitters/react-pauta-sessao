import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-social">
                    <a href="#">📘</a>
                    <a href="#">✖</a>
                    <a href="#">📷</a>
                    <a href="#">▶</a>
                </div>

                <div className="footer-access">
                    <a href="#">🖥</a>
                    <a href="#">♿</a>
                    <a href="#">🌀</a>
                </div>

                <div className="footer-languages">
                    <a href="#">ENGLISH</a>
                    <a href="#">ESPAÑOL</a>
                    <a href="#">FRANÇAIS</a>
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-links-left">
                    <a href="#">🔒 Intranet</a>
                    <a href="#">Servidor efetivo</a>
                    <a href="#">Servidor comissionado</a>
                    <a href="#">Servidor aposentado</a>
                    <a href="#">Pensionista</a>
                </div>

                <div className="footer-links-right">
                    <a href="#">Proteção de dados (LGPD)</a>
                    <a href="#">📞 Fale com o Senado</a>
                </div>
            </div>

            <div className="footer-bottom">
                Senado Federal - Praça dos Três Poderes - Brasília DF - CEP
                70165-900 | Telefone: 0800 0 61 2211
            </div>
        </footer>
    );
};

export default Footer;