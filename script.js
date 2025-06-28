// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Toggle (Mobile ke liye menu ko kholne-band karne ka code)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // 'active' class add/remove karega
        });

        // Jab menu link par click ho toh menu band ho jaaye (agar mobile mein ho)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Sirf mobile screen size par
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // 2. Load Instagram Posts (Instagram Gallery ke liye)
    // Yeh woh Instagram links hain jo tumne diye the:
    const instagramPosts = [
        "https://www.instagram.com/p/DLlbkK7yWrl/",
        "https://www.instagram.com/p/DK66e-Nz_4N/",
        "https://www.instagram.com/p/DK4-eJoSf4P/",
        "https://www.instagram.com/p/DHeCuqPTgDo/",
        "https://www.instagram.com/p/DGil1ZrT-JF/",
        "https://www.instagram.com/p/DGJOGW4SR8P/",
        "https://www.instagram.com/p/DFBRWNYzjPx/",
        "https://www.instagram.com/p/C_ykFgpT2A2/",
        "https://www.instagram.com/p/C_yfvkgTQop/",
        "https://www.instagram.com/p/C_uiMbnyoFC/"
    ];

    const instagramGallery = document.getElementById('instagram-gallery');

    if (instagramGallery) {
        instagramPosts.forEach(postUrl => {
            // **Important Note (Zaroori Baat):**
            // Instagram se seedhe images load karna mushkil hota hai (security reasons ki wajah se).
            // Is code mein, main ek placeholder image use kar raha hoon.
            // Agar tumhe asli Instagram images dikhani hain, toh tumhe ya toh unhe manually download karke
            // apne folder mein rakhna padega, ya phir Instagram ke official API ka use karna padega
            // (jiske liye developer account ki zaroorat hoti hai).

            // Post ID nikalne ki koshish (sirf placeholder text ke liye)
            const postIdMatch = postUrl.match(/\/p\/([^/]+)\//);
            const postId = postIdMatch ? postIdMatch[1] : 'default';

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const link = document.createElement('a');
            link.href = postUrl;
            link.target = "_blank"; // Naye tab mein khole
            link.rel = "noopener noreferrer"; // Security ke liye achhi practice

            const img = document.createElement('img');
            // **Yeh ek placeholder image hai.**
            // Iski jagah tumhe apni asli Instagram post ki thumbnail image ka URL dalna hoga.
            // Jaise: img.src = "path/to/your/instagram_post_thumbnail.jpg";
            img.src = `https://via.placeholder.com/250x250?text=Instagram+Post+${postId.substring(0,5)}`; // Placeholder image URL
            img.alt = `Instagram Post ${postId}`;

            link.appendChild(img);
            galleryItem.appendChild(link);
            instagramGallery.appendChild(galleryItem);
        });
    }

    // Optional: Smooth Scroll (Page mein upar-neeche smoothly scroll karne ke liye)
    // Yeh functionality CSS mein 'scroll-behavior: smooth;' se bhi ho sakti hai.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Default link behaviour ko roko

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Smooth scroll karega
            });
        });
    });

    // 3. Post/Reel sections by default khule na hon (Yeh CSS aur HTML se manage hota hai)
    // Jab tak tumne koi extra code nahi dala hai jo inhe load hote hi khol de,
    // yeh sections by default band hi rahenge (yaani page load hone par dikhenge,
    // lekin unke andar ka content koi pop-up ya modal ki tarah nahi khulega).
});
                               
