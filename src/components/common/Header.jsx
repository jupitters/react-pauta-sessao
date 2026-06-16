import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <button className="menu-button">
                    ☰
                </button>

                <span className="menu-text">Menu</span>
            </div>

            <div>
                <img
                    src="https://www.senado.leg.br/noticias/essencial/images/senado.svg"
                    alt="Senado Federal"
                />
            </div>

            <div>
                <a href="#">Acessibilidade</a>

                <span className="divider"></span>

                <a href="#">
                    <img className="imagem"
                        src="https://www.senado.leg.br/noticias/essencial/images/hands.svg"
                        alt="Libras"
                    />
                </a>

                <span className="divider"></span>

                <a href="#" aria-label="Contraste">
                    ◻
                </a>

                <span className="divider"></span>

                <a href="#">Aumentar zoom</a>

                <a href="#">Diminuir zoom</a>

                <a href="#">Fale com o Senado</a>
            </div>
        </header>
    );
};

export default Header;