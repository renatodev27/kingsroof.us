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


        <!--***************SECTION 1***************-->
    <section class="section1">
        <!-- /////ELEMENT 1///// -->
        <div class="s1-element1">
            <div class="s1-e1-boxes">
                <div class="s1-e1-multifamily box">
                    <a href="./multifamily.html">
                        <img decoding="async" src="/assets/icons/icon-multifamily.png" alt="">
                        <p>MULTIFAMILY</p>
                    </a>
                </div>
                
                <div class="s1-e1-commercial box">
                    <a href="./commercial.html">
                        <img decoding="async" src="/assets/icons/icon-commercial.png" alt="">
                        <p>COMMERCIAL</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="s1-container">
            <!-- /////ELEMENT 2 ///// -->
            <div class="section1-element2">
                <p>LET US HELP WITH YOUR NEXT ROOFING PROJECT</p>
                <a class="s1-e2-btn" href="https://kingroof.us/contact-us/">
                    <button class="get-btn">Get a free Inspection</button>
                </a>
            </div>

            <!-- /////ELEMENT 3 - SERVICES///// -->
            <div class="s1-element3-title">
                <span class="line"></span>
                <h2>SERVICES</h2>
                <span class="line"></span>
            </div>

            <div class="s1-element3-description">
                <h3>Top and Local Roofing Specialists In Metro Atlanta</h3>
                <p>Residential and Commercial Roofing Services – Fully licensed and insured technicians you can trust.</p>
            </div>

            <!-- /////ELEMENT 4 - LARGE CARDS///// -->
            <div class="s1-element4-largeCards container">
                <div class="largeCard roof">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/roof.png" alt="">
                        <p class="card-title">Roof</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
                    </a>
                </div>
                <div class="largeCard renovation">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Renovation.png" alt="">
                        <p class="card-title">Renovation</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                    </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="largeCard painting">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Painting.png" alt="">
                        <p class="card-title">Painting</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="largeCard insurance">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Insurance-Experts.png" alt="">
                        <p class="card-title">Insurance
            Experts</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="largeCard fenceDecks">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Fence-Decks.png" alt="">
                        <p class="card-title">Fence & Decks</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
                    </a>
                </div>
            </div>
                <!-- --SMALL CARDS-- -->
            <div class="s1-element4-smallCards">
                <div class="smallCard concrete">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Concrete.png" alt="">
                        <p class="card-title">Concrete</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="smallCard solarPanels">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Solar-panels-.png" alt="">
                        <p class="card-title">Solar panels</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="smallCard kingClean">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/King-Clean-.png" alt="">
                        <p class="card-title">King Clean</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
                <div class="smallCard softWash">
                    <div class="card-content">
                        <img decoding="async" class="card-img" src="assets/icons/Soft-wash.png" alt="">
                        <p class="card-title">Soft wash</p>
                        <p class="card-description">King Roof’s certified and insured technicians take great care with every roofing project from start to finish.</p>
                        </div>
                    <a href="https://kingroof.us/contact-us/">
                        <button class="card-btn">Start your project</button>
</a>
                </div>
            </div>
        </div>
    </section>
    <!---------------FIN SECTION 1---------------->

    <!--***************SECTION 2*************-->
    <div class="section2 ">
        <div class="s2-coreValues">
            <div class="coreValues">
                <h2 class="s2-title">OUR CORE VALUES</h2>
                <p class="s2-description">At King Roof, we pride ourselves on providing the highest quality roofing services in the industry. Our certified and trained technicians embody our core values to ensure total customer satisfaction.</p>
            </div>
            <div class="coreValues-icons">
                <div>
                    <img decoding="async" src="/assets/icons/Great-Service-icon.png" alt="">
                    <span>King Service</span>
                </div>
                <div>
                    <img decoding="async" src="/assets/icons/High-Standards-ico.png" alt="">
                    <span>Castle Quality</span>
                </div>
                <div>
                    <img decoding="async" src="/assets/icons/Professionalism-icon.png" alt="">
                    <span>Warrior Team</span>
                </div>
                <div>
                    <img decoding="async" src="/assets/icons/Competitive-Prices-icon.png" alt="">
                    <span>Noble Attitude</span>
                </div>
            </div>
        </div>
    </div>
    <div class="s2-lazo">
        <img decoding="async" class="lazo" src="/assets/img/lazo-1.png" alt="">
    </div>
    <!---------------FIN SECTION 2---------------->

    <!--***************SECTION 3*************-->
    <div class="section3 container">
        <div class="s3-explore">
            <h3 class="explore-title">Explore Recent
                Projects</h3>
            <a href="./projects.html">
                <button>View all projects</button>
            </a>
            <div class="s3-explore-img">
                <img decoding="async" src="/assets/img/Grupo-513.png" alt="">
            </div>
        </div>
        <div class="s3-images">
            <div class="explore-img">               
                <div>
                    <a href="https://kingroof.us/wp-content/uploads/2022/06/g02.jpg" title="g02">
                        <img decoding="async" class="s3-hover" src="/assets/img/g02-400x284.jpg" alt="">
                        <span class="s3-img-overlay"></span>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <img decoding="async" class="s3-hover" src="/assets/img/g03-400x284.jpg" alt="">
                        <span class="s3-img-overlay"></span>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <img decoding="async" class="s3-hover" src="/assets/img/g01-400x284.jpg" alt="">
                        <span class="s3-img-overlay"></span>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <img decoding="async" class="s3-hover" src="/assets/img/g02.jpeg" alt="">
                        <span class="s3-img-overlay"></span>
                    </a>
                </div>  
            </div>
            <div class="s3-explore-pages">
                <span class="active">1</span>
                <span>2</span>
                <span>Next</span>
            </div>
        </div>
    </div>
    <!---------------FIN SECTION 3---------------->

    <!--***************SECTION 4***************-->
    <div class="section4">
        <div class="s4-commentContainer">
            <h3 class="s4-title">Our Home Owners Say</h3>
            <div class="comments-section">
                <div class="comments">
                    <div class="comment">
                        <p class="comment-text">
                            King Roof Is an excellent company and Rosendo is a great Representative for this company ( very Professional, Honest, and very familiar with his product). <br>
                            Rosendo got the ball rolling for our roof repair. The Insurance approved a full roof installation. King Roof and its technician were outstanding in their work and cleanup. <br>
                            We are extremely happy with the results of this project. If you need a roof repair or replacement contact, Rosendo and King Roof.
                        </p>
                        <div class="stars">
                            <span>★★★★★</span>
                        </div>
                        <div class="comment-author">John Youngblood</div>
                    </div>
                    <!-- <div class="comment">
                    <p class="comment-text">
                        King Roof Is an excellent company and Rosendo is a great Representative for this company ( very Professional, Honest, and very familiar with his product). <br>
                        Rosendo got the ball rolling for our roof repair. The Insurance approved a full roof installation. King Roof and its technician were outstanding in their work and cleanup. <br>
                        We are extremely happy with the results of this project. If you need a roof repair or replacement contact, Rosendo and King Roof.
                    </p>
                    <div class="stars">
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                    </div>
                    <div class="comment-author">John Youngblood</div>
                </div>
                <div class="comment">
                    <p class="comment-text">
                        King Roof Is an excellent company and Rosendo is a great Representative for this company ( very Professional, Honest, and very familiar with his product). <br>
                        Rosendo got the ball rolling for our roof repair. The Insurance approved a full roof installation. King Roof and its technician were outstanding in their work and cleanup. <br>
                        We are extremely happy with the results of this project. If you need a roof repair or replacement contact, Rosendo and King Roof.
                    </p>
                    <div class="stars">
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                        <span><i class="fa-solid fa-star" style="color: #2f0d31;"></i></span>
                    </div>
                    <div class="comment-author">John Youngblood</div>
                </div> -->
                    <!-- Agrega más comentarios aquí -->
                </div>
                <!-- **ARROW** -->
                <!-- <div class="swiper-arrows">
                    <div class="swiper-prev" role="button">&lt;</div>
                    <div class="swiper-next" role="button">&gt;</div>
                </div> -->
                <!-- **ARROW** -->

                <div class="pagination">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <!-- Agrega más puntos de paginación según la cantidad de comentarios -->
                </div>
            </div>
            
        </div>
        <!-- <div class="s4-rightSide">
            <img decoding="async" src="/assets/img/G10.jpeg" alt="">
        </div> -->
    </div>
    <!---------------FIN SECTION 4------------------>

    <!--***************FOOTER***************-->
    <!-- <footer class="footer container">
        <div class="footer-upper">
            <div class="logo-content">
                <img decoding="async" src="assets/logos/logo-whit.svg" width="130" height="150">
            </div>
            <div class="phone-content">
                <i class="fas fa-headset"></i>
                <h6>678-644-5941</h6>
            </div>
            <div class="address-content">
                <i class="fas fa-map-marker-alt"></i>
                <h6>1165 Northchase Pkwy SE. Suite 305 Marietta, GA. 30067</h6>
            </div>
            <div class="sponsors-content">
                <img decoding="async" src="assets/img/king-roof-renovations.png" width="100" height="100">
            </div>
        </div>
        <div class="footer-lower">
            <h6>COPYRIGHT 2023 KING ROOF – ALL RIGHTS RESERVED</h6>
        </div>
    </footer> -->
    <!---------------FIN FOOTER------------------>