let headerComponent = `
    <header>
        <div class="top_header">
            <p>Code de réduction gratuit : soldes du debut d'année sur les articles sélectionnés. Utilisez : <span> MAINTENANT</span><a
                    href="collection-left-sidebar.html"> Disponible</a></p>
        </div>
      <div class="custom-container container header-1">
        <div class="row">
          <div class="col-12 p-0">
            <div class="mobile-fix-option">
              <ul>
                <li>
                  <a href="index.html"
                    ><i class="iconsax" data-icon="home-1"></i>Accueil</a
                  >
                </li>
                <li>
                  <a href="search.html"
                    ><i class="iconsax" data-icon="search-normal-2"></i
                    >Recherche</a
                  >
                </li>
                <li class="shopping-cart">
                  <a href="cart.html"
                    ><i class="iconsax" data-icon="shopping-cart"></i>Carte</a
                  >
                </li>
                <li>
                  <a href="favorie.html"
                    ><i class="iconsax" data-icon="heart"></i>Favories</a
                  >
                </li>
                <li>
                  <a href="dashboard.html"
                    ><i class="iconsax" data-icon="user-2"></i>Mon Compte</a
                  >
                </li>
              </ul>
            </div>
            <div
              class="offcanvas offcanvas-start"
              id="staticBackdrop"
              data-bs-backdrop="static"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
            >
              <div class="offcanvas-header">
                <h3 class="offcanvas-title" id="staticBackdropLabel">
                  Offcanvas
                </h3>
                <button
                  class="btn-close"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div></div>
                I will not close if you click outside of me.
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="main-menu">
              <a class="brand-logo" href="index.html">
                <img
                  class="img-fluid for-light"
                  src="/assets/img/logo/logo.jpg"
                  alt="logo" /><img
                  class="img-fluid for-dark"
                  src="./assets/img/logo/logo.jpg"
                  alt="logo"
              /></a>
              <nav id="main-nav">
                <ul
                  class="nav-menu sm-horizontal theme-scrollbar"
                  id="sm-horizontal"
                >
                  <li class="mobile-back" id="mobile-back">
                    Back<i
                      class="fa-solid fa-angle-right ps-2"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <a class="nav-link" href="#"
                      >Accueil <span> <i class="fa-solid fa-angle-down"></i></span
                    ></a>
                    <!-- <div class="mega-menu">
                      <div class="row gy-3">
                        <div class="col-xl-3">
                          <a
                            class="layout-images"
                            href="index.html"
                            target="_blank"
                            ><div class="layout-box img-1"></div>
                            <h5>Layout 1</h5></a
                          >
                        </div>
                        <div class="col-xl-3">
                          <a
                            class="layout-images"
                            href="layout-2.html"
                            target="_blank"
                            ><div class="layout-box img-2"></div>
                            <h5>Layout 2</h5></a
                          >
                        </div>
                        <div class="col-xl-3">
                          <a
                            class="layout-images"
                            href="layout-3.html"
                            target="_blank"
                            ><div class="layout-box img-3"></div>
                            <h5>Layout 3</h5></a
                          >
                        </div>
                        <div class="col-xl-3">
                          <a
                            class="layout-images"
                            href="layout-4.html"
                            target="_blank"
                            ><div class="layout-box img-4"></div>
                            <h5>Layout 4</h5></a
                          >
                        </div>
                      </div>
                    </div> -->
                  </li>
                  <li>
                    <a class="nav-link" href="#"
                      >Magasins<span> <i class="fa-solid fa-angle-down"></i></span
                    ></a>
                    <ul class="nav-submenu">
                      <li>
                        <a href="collection-left-sidebar.html"
                          >Mbolo</a
                        >
                      </li>
                      <li>
                        <a href="collection-right-sidebar.html"
                          >Chez lily</a
                        >
                      </li>
                      <li>
                        <a href="collection-no-sidebar.html"
                          >Pablo Déco</a
                        >
                      </li>
                      <li>
                        <a href="collection-3-grid.html">Voir +</a>
                      </li>
                    </li>
                    </ul>
                  </li>
                  <li>
                    <a class="nav-link" href="#"
                      >Catalogue
                      <span> <i class="fa-solid fa-angle-down"></i></span
                    ></a>
                    <div class="mega-menu p-0 overflow-hidden" style=" width: 100px !important; max-width: 100px !important;">
                      <div class="row">
                        <div class="col-xl-4">
                          <ul class="p-2">
                            <li><a href="salon.html">Salon</a></li>
                            <li>
                              <a href="cuisine.html">Cuisine</a>
                            </li>
                            <li>
                              <a href="chambre.html">Chambre</a>
                            </li>
                            <li>
                              <a href="douche.html"
                                >Douche<span
                                  class="badge-sm theme-default"
                                  >new</span
                                ></a
                              >
                            </li>
                            <li>
                              <a href="divers.html"
                                >Divers</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="col-xl-4"></div>
                        <div class="col-xl-4 d-none d-xl-block px-0">
                          <div class="menu-banner">
                            <img
                              class="w-100 img-fluid"
                              src="./assets/images/mega-menu/banner.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a class="nav-link" href="index.html">Apropos</a>
                </li>
                <li>
                    <a class="nav-link" href="index.html">Contact</a>
                </li>
                  <!--  -->
              </nav>
              <div class="sub_header">
                <div class="toggle-nav" id="toggle-nav">
                  <i class="fa-solid fa-bars-staggered sidebar-bar"></i>
                </div>
                <ul class="justify-content-end">
                  <li>
                    <button
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop"
                      aria-controls="offcanvasTop"
                    >
                      <i class="iconsax" data-icon="search-normal-2"></i>
                    </button>
                  </li>
                  <li>
                    <a href="template/favorie.html"
                      ><i class="iconsax" data-icon="heart"></i
                      ><span class="cart_qty_cls">2</span></a
                    >
                  </li>
                  <li class="onhover-div">
                    <a href="#"><i class="iconsax" data-icon="user-2"></i></a>
                    <div class="onhover-show-div user">
                      <ul>
                        <li><a href="login.html">Login </a></li>
                        <li><a href="sign-up.html">Register</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="onhover-div shopping-cart">
                    <a
                      class="p-0"
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      ><div class="shoping-prize">
                        <i class="iconsax pe-2" data-icon="basket-2"> </i>0
                        items
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
`
let header = document.getElementById("header")

header.innerHTML = headerComponent;

