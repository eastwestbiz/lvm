// main.js - Optimized for LV Mansion
(function () {
    "use strict";

    /*=====================================
    Sticky Navigation
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        if (!header_navbar) return;

        if (window.pageYOffset > 50) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // Show or hide the back-to-top button
        var backToTop = document.querySelector(".scroll-top");
        if (backToTop) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        }
    };

    // Go to top functionality
    var scrollTopBtn = document.querySelector(".scroll-top");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /*=====================================
    Anti-copy Protection
    ======================================= */
    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    // Prevent copy, cut, and drag events
    ['copy', 'cut', 'dragstart', 'selectstart'].forEach(function(evt) {
        document.addEventListener(evt, function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Prevent right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Prevent keyboard shortcuts for copy operations
    document.addEventListener('keydown', function(e) {
        const disallowKeys = ['a', 'c', 'x', 's', 'u', 'p'];
        const k = e.key.toLowerCase();
        
        // Prevent Ctrl+C, Ctrl+X, Ctrl+A, etc.
        if ((e.ctrlKey || e.metaKey) && disallowKeys.includes(k)) {
            e.preventDefault();
            return false;
        }
        
        // Prevent F12 and other dev tools shortcuts
        if (
            k === 'f12' ||
            (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(k)) ||
            (e.ctrlKey && k === 'u')
        ) {
            e.preventDefault();
            return false;
        }
    });

    /*=====================================
    Performance Optimizations
    ======================================= */
    // Lazy load images
    document.querySelectorAll('img:not([loading])').forEach(img => {
        if (!img.closest('.header-image')) { // Don't lazy load the hero image
            img.setAttribute('loading', 'lazy');
        }
        img.setAttribute('decoding', 'async');
    });

    // Set aspect ratio for hero image to prevent layout shift
    const heroImg = document.querySelector('.header-image img');
    if (heroImg && !heroImg.width) {
        heroImg.style.aspectRatio = '16/9';
        heroImg.style.display = 'block';
    }

    /*=====================================
    Mobile Navigation Fallback
    ======================================= */
    (function () {
        var toggler = document.querySelector('.navbar-toggler');
        var target = document.getElementById('navbarNine');

        if (!toggler || !target) return;

        // Toggle collapse manually
        toggler.addEventListener('click', function (e) {
            e.stopPropagation();
            var isShown = target.classList.contains('show');
            if (!isShown) {
                target.classList.add('show');
                toggler.setAttribute('aria-expanded', 'true');
            } else {
                target.classList.remove('show');
                toggler.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function (e) {
            if (!target.classList.contains('show')) return;
            if (e.target.closest('#navbarNine') || e.target.closest('.navbar-toggler')) return;
            target.classList.remove('show');
            toggler.setAttribute('aria-expanded', 'false');
        }, true);

        // Close menu when a nav link is clicked (mobile)
        var navLinks = target.querySelectorAll('.nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Only act if toggler is visible (mobile)
                if (window.getComputedStyle(toggler).display === 'none') return;
                target.classList.remove('show');
                toggler.setAttribute('aria-expanded', 'false');
            });
        });
    })();

})();

/*=====================================
Google Translate Persistence
======================================= */
function initGoogleTranslatePersistence() {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setDate(date.getDate() + days);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Apply saved language when Google Translate loads
    var savedLang = getCookie('googtrans');
    if (savedLang) {
        var interval = setInterval(function() {
            var select = document.querySelector('.goog-te-combo');
            if (select) {
                clearInterval(interval);
                select.value = savedLang;
                select.dispatchEvent(new Event('change'));
            }
        }, 100);
    }

    // Save language selection to cookie
    document.body.addEventListener('change', function(e) {
        if (e.target && e.target.matches('.goog-te-combo')) {
            setCookie('googtrans', e.target.value, 365);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGoogleTranslatePersistence();
});