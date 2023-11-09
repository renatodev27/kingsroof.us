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

@media (min-width: 1453px) {
    .logo { /* EDITED */
        position: relative;
        display: block;
        width: 20rem;
        height: 20rem;
        margin-bottom: 2rem;
        padding-left: 3rem;
        left: 0;
        margin-right: 5rem;
    }

    .logo img { /* ADDED */
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .menu ul{ /* EDITED */
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        gap: 1rem;
        justify-content: flex-start;
        align-items: stretch;
    }

    .menu ul li { /* ADDED */
        padding-left: 1.1rem;
        padding-right: 1.1rem;
    }
    
    .nav-link a { /* EDITED */
        align-items: center;
        color: var(--white);
        display: flex;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4rem;
        padding: 3.1rem 0;
        text-align: left;
        text-decoration: none;
    }

    .all-nav {
        margin: 2rem 1rem;
    }

    .header.not-home .all-nav .contact .redes {
        display: flex;
        flex-direction: row;
    }

    .header.not-home .all-nav .contact .redes a {
        background-color: #2f0d31;
        padding: 0.3rem 0.5rem;
        border-radius: 5rem;
    }
    .header.not-home .all-nav .contact .contact-btn {
        width: auto;
        height: auto;
        padding: 1.4rem 3rem;
    }
}