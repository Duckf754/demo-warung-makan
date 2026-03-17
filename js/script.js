/**
 * WARUNG MAKAN ARSYAD - JAVASCRIPT
 * Interactive features and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // INITIALIZE AOS ANIMATION LIBRARY
    // ============================================
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
    
    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Active nav link on scroll
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // ============================================
    // MENU DATA & RENDERING
    // ============================================
    const menuData = [
        {
            id: 1,
            name: 'Nasi Goreng Spesial',
            price: 'Rp 25.000',
            description: 'Nasi goreng dengan telur, ayam suwir, bakso, dan sayuran segar. Disajikan dengan kerupuk dan acar.',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=400&h=300&fit=crop',
            category: 'nasi',
            badge: 'Best Seller',
            rating: 4.9
        },
        {
            id: 2,
            name: 'Ayam Geprek',
            price: 'Rp 22.000',
            description: 'Ayam crispy yang digeprek dengan sambal pedas khas. Dilengkapi nasi hangat dan lalapan.',
            image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
            category: 'nasi',
            badge: 'Populer',
            rating: 4.8
        },
        {
            id: 3,
            name: 'Mie Ayam Bakso',
            price: 'Rp 20.000',
            description: 'Mie kenyal dengan topping ayam cincang, bakso sapi, dan kuah kaldu yang gurih.',
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
            category: 'mie',
            badge: null,
            rating: 4.7
        },
        {
            id: 4,
            name: 'Nasi Campur Komplit',
            price: 'Rp 28.000',
            description: 'Nasi dengan aneka lauk: ayam goreng, telor balado, tempe, tahu, dan sambal.',
            image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop',
            category: 'nasi',
            badge: 'Favorit',
            rating: 4.9
        },
        {
            id: 5,
            name: 'Bakso Urat Spesial',
            price: 'Rp 23.000',
            description: 'Bakso urat besar dengan kuah kaldu sapi asli, mie, bihun, dan sayuran.',
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop',
            category: 'mie',
            badge: null,
            rating: 4.6
        },
        {
            id: 6,
            name: 'Soto Ayam Lamongan',
            price: 'Rp 24.000',
            description: 'Soto ayam dengan kuah kuning khas Lamongan, dilengkapi koya dan sambal.',
            image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
            category: 'nasi',
            badge: 'Rekomendasi',
            rating: 4.8
        },
        {
            id: 7,
            name: 'Es Teh Manis',
            price: 'Rp 5.000',
            description: 'Es teh manis segar dengan daun teh pilihan. Pilihan sempurna untuk menemani makan.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
            category: 'minuman',
            badge: null,
            rating: 4.5
        },
        {
            id: 8,
            name: 'Es Jeruk Segar',
            price: 'Rp 8.000',
            description: 'Jeruk peras segar dengan es batu. Manis alami dan menyegarkan.',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
            category: 'minuman',
            badge: 'Segar',
            rating: 4.7
        },
        {
            id: 9,
            name: 'Jus Alpukat',
            price: 'Rp 15.000',
            description: 'Jus alpukat creamy dengan susu kental manis. Lezat dan mengenyangkan.',
            image: 'https://images.unsplash.com/photo-1523049673856-6485b5301054?w=400&h=300&fit=crop',
            category: 'minuman',
            badge: 'Best Seller',
            rating: 4.9
        }
    ];
    
    // Render menu items
    function renderMenuItems(category = 'all') {
        const menuGrid = document.getElementById('menuGrid');
        const filteredItems = category === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === category);
        
        menuGrid.innerHTML = filteredItems.map(item => `
            <div class="menu-card" data-category="${item.category}" data-aos="fade-up">
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
                </div>
                <div class="menu-content">
                    <div class="menu-header">
                        <h3 class="menu-title">${item.name}</h3>
                        <span class="menu-price">${item.price}</span>
                    </div>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-footer">
                        <div class="menu-rating">
                            <i class="fas fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                        <a href="https://wa.me/6281234567890?text=Halo%20Warung%20Makan%20Arsyad,%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}" 
                           class="menu-order" target="_blank">
                            Pesan
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Reinitialize AOS for new elements
        AOS.refresh();
    }
    
    // Initial render
    renderMenuItems();
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMenuItems(this.dataset.tab);
        });
    });
    
    // ============================================
    // TESTIMONIALS SLIDER
    // ============================================
    const testimonialsData = [
        {
            id: 1,
            name: 'Budi Santoso',
            role: 'Pelanggan Setia',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'Nasi gorengnya juara banget! Porsinya pas, rasanya enak, dan harganya sangat terjangkau. Sudah jadi langganan setiap weekend bersama keluarga.'
        },
        {
            id: 2,
            name: 'Siti Rahayu',
            role: 'Food Blogger',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'Ayam gepreknya benar-benar recommended! Sambalnya pedasnya pas dan ayamnya crispy banget. Tempatnya juga bersih dan nyaman.'
        },
        {
            id: 3,
            name: 'Ahmad Fauzi',
            role: 'Mahasiswa',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'Sebagai mahasiswa, warung ini jadi andalan saya. Harga mahasiswa friendly tapi rasanya nggak murahan. Mie ayamnya favorit saya!'
        },
        {
            id: 4,
            name: 'Dewi Kusuma',
            role: 'Ibu Rumah Tangga',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            text: 'Pelayanannya ramah dan cepat. Soto ayamnya berasa banget rempah-rempahnya, mirip masakan sendiri. Recommended buat makan bareng keluarga!'
        }
    ];
    
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const testimonialsDots = document.getElementById('testimonialsDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    let autoSlideInterval;
    
    // Render testimonials
    function renderTestimonials() {
        testimonialsTrack.innerHTML = testimonialsData.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" loading="lazy">
                </div>
                <div class="testimonial-rating">
                    ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-author">${testimonial.name}</h4>
                <span class="testimonial-role">${testimonial.role}</span>
            </div>
        `).join('');
        
        // Render dots
        testimonialsDots.innerHTML = testimonialsData.map((_, index) => `
            <button class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
        `).join('');
    }
    
    renderTestimonials();
    
    // Slide functions
    function goToSlide(index) {
        currentSlide = index;
        testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialsData.length;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialsData.length) % testimonialsData.length;
        goToSlide(currentSlide);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    testimonialsDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            goToSlide(parseInt(e.target.dataset.index));
            resetAutoSlide();
        }
    });
    
    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
    
    // ============================================
    // LIGHTBOX GALLERY
    // ============================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            lightboxImage.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.getElementById('backToTop');
    
    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // WHATSAPP NUMBER CONFIGURATION
    // ============================================
    // Ganti nomor WhatsApp di sini jika diperlukan
    const whatsappNumber = '6281234567890';
    
    // Update semua link WhatsApp
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace(/\d+/, whatsappNumber);
        link.setAttribute('href', newHref);
    });
    
    // ============================================
    // PRELOADER (Optional)
    // ============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ============================================
    // COUNTER ANIMATION FOR STATS
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }
    
    // Intersection Observer for counters
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.textContent);
                        animateCounter(counter, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // ============================================
    // FORM VALIDATION (If forms are added later)
    // ============================================
    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // CONSOLE WELCOME MESSAGE
    // ============================================
    console.log('%c🍽️ Warung Makan Arsyad', 'font-size: 24px; font-weight: bold; color: #E85D04;');
    console.log('%cSelamat datang! Terima kasih telah mengunjungi website kami.', 'font-size: 14px; color: #333;');
    console.log('%cUntuk pemesanan, silakan hubungi WhatsApp: +62 812-3456-7890', 'font-size: 12px; color: #25D366;');
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Teks berhasil disalin: ' + text);
    }).catch(err => {
        console.error('Gagal menyalin teks:', err);
    });
}
