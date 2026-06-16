import React from 'react'

const Header = () => {
    return (
        <header>
            <nav class="navbar_acessibilidade u-hideUpper" aria-label="Acessibilidade">
                <div class="u-hideUpper"> <button class="navbar-icons btn btn-secondary js-sidebar-action" id="jstoggle"
                        type="button"> <i class="fas fa-bars"></i> </button> </div>
                <ul class="flex-unstyled li-spacer">
                    <li> <a class="flex-item--center link link-deep"
                            href="https://www12.senado.leg.br/institucional/responsabilidade-social/acessibilidade/pages/acessibilidade-no-portal-do-senado"
                            role="button" title="Acessibilidade"> <img
                                src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-acessibilidade.svg"
                                title="Acessibilidade" width="19px" height="23px" alt="Acessibilidade" /> </a> </li>
                    <li class="fence--solo"></li>
                    <li> <a class="flex-item--center link link-deep js-vlibras" href="#" role="button" title="Libras"> <img
                                src="https://www.senado.leg.br/noticias/essencial/images/hands.svg" title="Libras" width="21px"
                                height="23px" alt="Libras" /> </a> </li>
                    <li class="fence--solo"></li>
                    <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Alternar contraste"
                            aria-label="Alternar contraste" data-contrast-toggle="" aria-pressed="false"> <img
                                src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-contraste.svg" width="23px"
                                height="23px" alt="" aria-hidden="true" /> </a> </li>
                    <li class="fence--solo"></li>
                    <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Aumentar zoom"
                            aria-label="Aumentar zoom" data-zoom-in=""> <img
                                src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-a.svg" width="19px" height="21px"
                                alt="Aumentar zoom" /> </a> </li>
                    <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Diminuir zoom"
                            aria-label="Diminuir zoom" data-zoom-out=""> <img
                                src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-a-.svg" width="19px" height="21px"
                                alt="Diminuir zoom" /> </a> </li>
                </ul>
            </nav>
            <nav class="Triad navbar_global u-hideLower">
                <div class="Triad--padding--r">
                    <div class="mr-4 control_item u-hideLower"> <button
                            class="btn btn-primary js-sidebar-action btn btn-lg btn-secondary js-sidebar-action" id="jstoggle"
                            type="button" accesskey="3" aria-label="Botão do Menu Principal" title="Menu Principal"> <i
                                class="fas fa-bars"></i> <span class="btn-nav">&nbsp; Menu</span> </button> </div>
                    <div class="u-hideUpper"> <button class="navbar-icons btn btn-secondary js-sidebar-action" id="jstoggle"
                            type="button"> <i class="fas fa-bars"></i> </button> </div>
                </div>
                <div class="u-hideLower"> <a class="navbar_global-brand" href="https://www12.senado.leg.br/hpsenado"
                        title="Senado Federal" accesskey="1"> <img
                            src="https://www.senado.leg.br/noticias/essencial/images/senado.svg" alt="Logo Senado Federal" /> </a>
                </div>
                <div class="mr-4">
                    <div class="u-hideLower">
                        <ul class="flex-unstyled li-spacer">
                            <li> <a class="flex-item--center link link-deep"
                                    href="https://www12.senado.leg.br/institucional/responsabilidade-social/acessibilidade/pages/acessibilidade-no-portal-do-senado"
                                    role="button" title="Acessibilidade"> <img
                                        src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-acessibilidade.svg"
                                        title="Acessibilidade" width="19px" height="23px" alt="Acessibilidade" /> </a> </li>
                            <li class="fence--solo"></li>
                            <li> <a class="flex-item--center link link-deep js-vlibras" href="#" role="button" title="Libras">
                                    <img src="https://www.senado.leg.br/noticias/essencial/images/hands.svg" title="Libras"
                                        width="21px" height="23px" alt="Libras" /> </a> </li>
                            <li class="fence--solo"></li>
                            <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Alternar contraste"
                                    aria-label="Alternar contraste" data-contrast-toggle="" aria-pressed="false"> <img
                                        src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-contraste.svg" width="23px"
                                        height="23px" alt="" aria-hidden="true" /> </a> </li>
                            <li class="fence--solo"></li>
                            <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Aumentar zoom"
                                    aria-label="Aumentar zoom" data-zoom-in=""> <img
                                        src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-a.svg" width="19px"
                                        height="21px" alt="Aumentar zoom" /> </a> </li>
                            <li> <a class="flex-item--center link link-deep" href="#" role="button" title="Diminuir zoom"
                                    aria-label="Diminuir zoom" data-zoom-out=""> <img
                                        src="https://wwwdsv.senado.leg.br/inc/essencial/img/icon-a-.svg" width="19px"
                                        height="21px" alt="Diminuir zoom" /> </a> </li>
                            <li class="fence--solo"></li>
                            <li> <a class="link link-deep" href="https://www12.senado.leg.br/institucional/falecomosenado"
                                    accesskey="5">Fale com o Senado</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header