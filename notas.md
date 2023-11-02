<style>
:root {
    --ocre: #b58b35;
    --white: #ffffff;
    --dark-purple: #2f0d31;
    --pale-silver: #bebcbf;
    --pale-ocre: #93753C;
    --marfil: #fff1d4;
}

#index.html= 
    - 118: la etiqueta a es más grande que el button y no puedo ajustar el tamaño, osea que el click funciona tambien fuera del boton

    - 278: al dar click a las imagenes se abre en slider con imagenes

.header-elements {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 21rem;
    }
    .left-head-element {
        width: 100% !important;
    }
    .left-head-element-title {
        font-size: 5rem !important;
        padding-top: 4px !important;
        padding-bottom: 0;
    }
    .header-lion {
        margin-right: 0 !important;
        /* align-self: center !important; */
        height: 27.9rem;
        padding-bottom: 10px;
        /* transform: translateX(39.7%) translateY(8px) !important; */
        text-align: center !important;
        /* margin-left: auto; */
        /* margin-right: auto; */
        bottom: 0;
        width: 100% !important;
        /* margin: 0 auto;*/
    }
    .header-lion img {
        width: 154px !important;
        top: -5px;
    }
    .header-description {
        padding: 21.7px 7rem 64px !important;
        background-color: var(--ocre);
        display: flex;
        width: 100% !important;
    }
@media (max-width: 980px) {
    .all-nav {
        flex-direction: column;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .navbar {
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 0;
        /* padding-left: 0; */
    }
    .logo {
        padding-bottom: 0;
        padding-left: 5px;
    }
    .menu-toggle {
        display: flex;
        transform: translateY(3%);
        justify-content: center;
    }
    .menu {
        display: none;

    }
    .menu.active {
        display: block;
    }
    .menu.active ul {
        flex-direction: column;
        width: 100%;
        align-items: center;
        background-color: var(--white);
        position: absolute;
        height: auto;
        top: 100%;
        z-index: 1;
        left: 1rem;
        padding: 5%;
        border-top: 3px solid var(--ocre);
        box-shadow: 0 2px 5px rgba(0,0,0,.1);
    }
    .nav-link {
        border-bottom: 1px solid rgba(0,0,0,.03);
        width: 100%;
    }
    .nav-link a {
        color: var(--dark-purple);
        font-size: 1.4rem;
        line-height: 2.6rem;
        padding: 1rem 5%;
        display: block;
        width: 100%;
    }
    .nav-link a:hover {
        color: var(--light-purple);
        opacity: .7;
    }
    .nav-link-active a {
        color: var(--ocre);
    }
}