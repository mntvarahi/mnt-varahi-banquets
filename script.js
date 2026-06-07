document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dynamic Content Fetch Engine ---
    // Note: If you convert Google Drive share links to dynamic asset urls later,
    // modify your config.json with this specific structure:
    // https://drive.google.com/uc?export=download&id=YOUR_IMAGE_FILE_ID
    
    fetch('config.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network configuration verification failed');
            }
            return response.json();
        })
        .then(data => {
            populateBusinessConfiguration(data);
        })
        .catch(error => {
            console.error('Error handling data population:', error);
        });

    function populateBusinessConfiguration(data) {
        // Map elements
        const mapsIframe = document.getElementById('dynamic-map');
        if (mapsIframe && data.contact.google_maps_embed) {
            mapsIframe.src = data.contact.google_maps_embed;
        }

        // WhatsApp links
        const whatsappBtn = document.getElementById('dynamic-whatsapp');
        if (whatsappBtn && data.contact.whatsapp_number) {
            whatsappBtn.href = `https://wa.me/${data.contact.whatsapp_number}`;
        }

        // Instagram Integration
        const instagramLink = document.getElementById('dynamic-instagram');
        const instagramFloat = document.getElementById('dynamic-floating-instagram');
        if (data.contact.instagram_link) {
            if (instagramLink) instagramLink.href = data.contact.instagram_link;
            if (instagramFloat) instagramFloat.href = data.contact.instagram_link;
        }

        // Hero Background Engine
        const heroSection = document.getElementById('home');
        if (heroSection && data.images.hero.gdrive_link) {
            heroSection.style.backgroundImage = `url('${data.images.hero.gdrive_link}')`;
        }

        // Image Engine
        const mainLogo = document.getElementById('dynamic-logo');
        if (mainLogo && data.images.logo.gdrive_link) {
            mainLogo.src = data.images.logo.gdrive_link;
        }

        const aboutImg = document.getElementById('dynamic-about-img');
        if (aboutImg && data.images.about.gdrive_link) {
            aboutImg.src = data.images.about.gdrive_link;
        }

        // Dynamic Gallery Construction
        const galleryGrid = document.getElementById('dynamic-gallery');
        if (galleryGrid && data.images.gallery && data.images.gallery.length > 0) {
            galleryGrid.innerHTML = ''; // Clear fallback blocks to map JSON perfectly
            data.images.gallery.forEach((item, index) => {
                const galleryWrapper = document.createElement('div');
                galleryWrapper.className = 'gallery-item';
                
                const imgElement = document.createElement('img');
                imgElement.src = item.gdrive_link;
                imgElement.alt = `MNT Varahi Festive Event Frame ${index + 1}`;
                imgElement.loading = 'lazy';
                
                galleryWrapper.appendChild(imgElement);
                galleryGrid.appendChild(galleryWrapper);
            });
        }
    }

    // --- Premium Mobile Navigation Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });
    }

    // Close menu when clicked over navigation items
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinksList.classList.remove('active');
        });
    });

    // --- Dynamic Back To Top Interactive Logic ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.remove('scroll-top-hidden');
            scrollTopBtn.classList.add('scroll-top-visible');
        } else {
            scrollTopBtn.classList.remove('scroll-top-visible');
            scrollTopBtn.classList.add('scroll-top-hidden');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});