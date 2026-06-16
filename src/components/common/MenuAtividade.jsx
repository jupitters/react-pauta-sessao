const MenuAtividade = () => {
    return (
        <section className="atividade-legislativa">
            <div className="atividade-header">
                <h1>Atividade Legislativa</h1>

                <div className="busca">
                    <input
                        type="text"
                        placeholder="Buscar"
                    />
                    <button>
                        🔍
                    </button>
                </div>
            </div>

            <nav className="atividade-menu">
                <ul>
                    <li><a href="#">Plenário</a></li>
                    <li><a href="#">Comissões</a></li>
                    <li><a href="#">Projetos e Matérias</a></li>
                    <li><a href="#">Informações Legislativas</a></li>
                    <li><a href="#">Legislação</a></li>
                    <li><a href="#">Órgãos do Parlamento</a></li>
                    <li><a href="#">Mais</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default MenuAtividade