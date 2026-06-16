import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-button">
                    ☰
                </button>

                <span className="menu-text">Menu</span>
            </div>

            <div className="header-center">
                <img
                    src="https://www.senado.leg.br/noticias/essencial/images/senado.svg"
                    alt="Senado Federal"
                />
            </div>

            <div className="header-right">
                <a href="#">Acessibilidade</a>

                <span className="divider"></span>

                <a href="#">
                    <img
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