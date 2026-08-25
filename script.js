
        /* =================================================
           LOADING SCREEN
        ================================================= */

        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    () => {

                        document
                            .querySelector(".pembuka")
                            .classList
                            .add("selesai");

                    },
                    2000
                );

            }
        );


        /* =================================================
           NAVBAR SAAT SCROLL
        ================================================= */

        const nav =
            document.getElementById("nav");


        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 60
                ) {

                    nav.classList
                        .add("scrolled");

                } else {

                    nav.classList
                        .remove("scrolled");

                }

            }
        );


        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const elemen =
            document.querySelectorAll(
                ".reveal"
            );


        const pengamat =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("aktif");

                            }

                        }
                    );

                },

                {
                    threshold: .12
                }

            );


        elemen.forEach(
            (item) => {

                pengamat.observe(item);

            }
        );


        /* =================================================
           ANIMASI BAR MINAT
        ================================================= */

        const bagianMinat =
            document.querySelector(
                ".minat"
            );


        const pengamatMinat =
            new IntersectionObserver(

                (entries) => {

                    if (
                        entries[0]
                            .isIntersecting
                    ) {

                        document
                            .querySelectorAll(
                                ".bar-isi"
                            )
                            .forEach(
                                (bar) => {

                                    bar.style.width =
                                        bar.dataset.width;

                                }
                            );


                        pengamatMinat
                            .disconnect();

                    }

                },

                {
                    threshold: .3
                }

            );


        pengamatMinat
            .observe(bagianMinat);


        /* =================================================
           EFEK 3D KARTU
        ================================================= */

        document
            .querySelectorAll(
                ".favorit-card, .fakta-card, .data"
            )
            .forEach(
                (card) => {


                    card.addEventListener(
                        "mousemove",
                        (e) => {

                            if (
                                window.innerWidth < 800
                            ) {

                                return;
                            }


                            const posisi =
                                card.getBoundingClientRect();


                            const x =
                                e.clientX -
                                posisi.left;


                            const y =
                                e.clientY -
                                posisi.top;


                            const tengahX =
                                posisi.width / 2;


                            const tengahY =
                                posisi.height / 2;


                            const rotasiX =
                                ((y - tengahY) /
                                tengahY) * -2;


                            const rotasiY =
                                ((x - tengahX) /
                                tengahX) * 2;


                            card.style.transform = `

                                perspective(800px)

                                rotateX(${rotasiX}deg)

                                rotateY(${rotasiY}deg)

                                translateY(-7px)

                            `;

                        }
                    );


                    card.addEventListener(
                        "mouseleave",
                        () => {

                            card.style.transform =
                                "";

                        }
                    );

                }
            );


        /* =================================================
           PARALLAX HIASAN
        ================================================= */

        const hiasan =
            document.querySelectorAll(
                ".hiasan"
            );


        window.addEventListener(
            "mousemove",
            (e) => {

                const x =
                    e.clientX /
                    window.innerWidth -
                    .5;


                const y =
                    e.clientY /
                    window.innerHeight -
                    .5;


                hiasan.forEach(
                    (item,index) => {

                        const kekuatan =
                            (index + 1) * 5;


                        item.style.marginLeft =
                            `${x * kekuatan}px`;


                        item.style.marginTop =
                            `${y * kekuatan}px`;

                    }
                );

            }
        );