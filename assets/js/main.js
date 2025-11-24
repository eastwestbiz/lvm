  (function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // Go to top
    var scrollTopBtn = document.querySelector(".scroll-top");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);

    // Mobile Menu Collapse
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove("show");
        })
    );
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    }) 

    "use strict";

}) ();


(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

}) ();


// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

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
});





document.addEventListener('DOMContentLoaded', function() {
    // Step navigation
    const steps = document.querySelectorAll('.payment-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 1;

    // Next step buttons
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            navigateToStep(nextStep);
        });
    });

    // Previous step buttons
    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            navigateToStep(prevStep);
        });
    });

    // Payment method selection
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove active class from all payment methods
            document.querySelectorAll('.payment-method').forEach(method => {
                method.classList.remove('active');
            });
            
            // Add active class to selected payment method
            this.closest('.payment-method').classList.add('active');
        });
    });

    // File upload preview
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.files.length > 0) {
                label.innerHTML = `<i class="lni lni-checkmark-circle"></i><span>${this.files.length} file(s) selected</span>`;
                label.style.borderColor = '#10b981';
            } else {
                label.innerHTML = '<i class="lni lni-upload"></i><span>Click to upload images, specifications, or reference documents</span>';
                label.style.borderColor = '';
            }
        });
    }

    // Form validation
    function validateStep(step) {
        let isValid = true;
        
        if (step === 2) {
            // Validate product information form
            const productName = document.getElementById('product-name');
            const productDescription = document.getElementById('product-description');
            const productCategory = document.getElementById('product-category');
            
            if (!productName.value.trim()) {
                showError(productName, 'Product name is required');
                isValid = false;
            } else {
                clearError(productName);
            }
            
            if (!productDescription.value.trim()) {
                showError(productDescription, 'Product description is required');
                isValid = false;
            } else {
                clearError(productDescription);
            }
            
            if (!productCategory.value) {
                showError(productCategory, 'Product category is required');
                isValid = false;
            } else {
                clearError(productCategory);
            }
        }
        
        if (step === 3) {
            // Validate payment information
            const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
            if (!selectedMethod) {
                alert('Please select a payment method');
                isValid = false;
            } else if (selectedMethod.value === 'credit-card') {
                // Validate credit card form
                const cardNumber = document.getElementById('card-number');
                const cardName = document.getElementById('card-name');
                const cardExpiry = document.getElementById('card-expiry');
                const cardCvc = document.getElementById('card-cvc');
                
                if (!validateCardNumber(cardNumber.value)) {
                    showError(cardNumber, 'Please enter a valid card number');
                    isValid = false;
                } else {
                    clearError(cardNumber);
                }
                
                if (!cardName.value.trim()) {
                    showError(cardName, 'Name on card is required');
                    isValid = false;
                } else {
                    clearError(cardName);
                }
                
                if (!validateExpiry(cardExpiry.value)) {
                    showError(cardExpiry, 'Please enter a valid expiry date (MM/YY)');
                    isValid = false;
                } else {
                    clearError(cardExpiry);
                }
                
                if (!validateCVC(cardCvc.value)) {
                    showError(cardCvc, 'Please enter a valid CVC');
                    isValid = false;
                } else {
                    clearError(cardCvc);
                }
            }
        }
        
        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.5rem';
        
        input.style.borderColor = '#ef4444';
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = '';
    }

    function validateCardNumber(number) {
        // Simple card number validation (should be enhanced for production)
        const cleaned = number.replace(/\s+/g, '');
        return /^\d{13,19}$/.test(cleaned);
    }

    function validateExpiry(expiry) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
    }

    function validateCVC(cvc) {
        return /^\d{3,4}$/.test(cvc);
    }

    function navigateToStep(step) {
        // Validate current step before proceeding
        if (step > currentStep && !validateStep(currentStep)) {
            return;
        }

        // Hide all steps
        steps.forEach(s => s.classList.remove('active'));
        
        // Show target step
        document.getElementById(`step-${step}`).classList.add('active');
        
        // Update progress steps
        progressSteps.forEach((progressStep, index) => {
            if (index + 1 <= step) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });
        
        currentStep = step;
        
        // Scroll to top of step
        document.getElementById(`step-${step}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Confirm payment
    document.querySelector('.confirm-payment')?.addEventListener('click', function() {
        if (validateStep(3)) {
            // Simulate payment processing
            this.innerHTML = '<i class="lni lni-spinner-arrow lni-spin"></i> Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                navigateToStep(4);
            }, 2000);
        }
    });

    // Get service from URL parameters
    function getServiceFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('service');
    }

    // Initialize service from URL
    const service = getServiceFromURL();
    if (service) {
        // You could pre-fill the form based on the service
        console.log(`Service selected: ${service}`);
    }
});

//<!-- Anti-copy JavaScript -->   

document.addEventListener('DOMContentLoaded', function() {
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

    // Prevent keyboard shortcuts for copy (Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U, Ctrl+A, etc.)
    document.addEventListener('keydown', function(e) {
        if (
            (e.ctrlKey && ['a', 'c', 'x', 's', 'u'].includes(e.key.toLowerCase())) ||
            (e.metaKey && ['a', 'c', 'x', 's', 'u'].includes(e.key.toLowerCase()))
        ) {
            e.preventDefault();
            return false;
        }
    });
});

//<!-- /Anti-copy JavaScript -->   

// This script is designed to work with the Google Translate widget to persist the selected language across page loads.
// It uses cookies to store the selected language and applies it on page load.
// Note: This is a workaround since the Google Translate widget does not natively support language persistence.
// Ensure this script runs after the Google Translate widget is loaded
// and the DOM is fully loaded to avoid issues with element selection.          
document.addEventListener('DOMContentLoaded', function() {
  // Function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie
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

  // Check for existing language preference
  var savedLang = getCookie('googtrans');
  if (savedLang) {
    // Wait for Google Translate widget to load
    var interval = setInterval(function() {
      if (typeof google !== 'undefined' && google.translate.TranslateElement) {
        clearInterval(interval);
        var select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event('change'));
        }
      }
    }, 100);
  }


// Preloader removal handled below in a single place
  // Listen for changes in the Google Translate dropdown
  var select = document.querySelector('.goog-te-combo');
  if (select) {                                                         
    select.addEventListener('change', function() {
      setCookie('googtrans', this.value, 365); // Store selected language in cookie for 1 year
    });
  }     

});
// End of Google Translate persistence script
// This script initializes various features of the website, including mobile navigation,
// scroll effects, preloader management, and more.
// This script initializes various features of the website, including mobile navigation,          

// scroll effects, preloader management, and more.
// It combines all initialization code into a single event listener for DOMContentLoaded.
// This ensures that all features are initialized after the DOM is fully loaded.    

// This script initializes various features of the website, including mobile navigation,
// scroll effects, preloader management, and more.
// It combines all initialization code into a single event listener for DOMContentLoaded.
// This ensures that all features are initialized after the DOM is fully loaded.
// This script initializes various features of the website, including mobile navigation,          
document.addEventListener('DOMContentLoaded', function() {
      initGoogleTranslatePersistence();

});


// Clean up Google Translate persistence implementation
function initGoogleTranslatePersistence() {
  // Function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  
    // Function to get a cookie
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

          // Check for existing language preference
          var savedLang = getCookie('googtrans');
          if (savedLang) {
            // Wait for Google Translate widget to load
            var interval = setInterval(function() {
            if (typeof google !== 'undefined' && google.translate.TranslateElement) {
              clearInterval(interval);
              var select = document.querySelector('.goog-te-combo');
              if (select) {
              select.value = savedLang;
              select.dispatchEvent(new Event('change'));
              }
            }
            }, 100);
          }
          
          // Listen for changes in the Google Translate dropdown
          var select = document.querySelector('.goog-te-combo');
          if (select) {
            select.addEventListener('change', function() {
            setCookie('googtrans', this.value, 365); // Store selected language in cookie for 1 year
          });
             }

          // Consolidate initialization functions
          function initMobileNav() {
            const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

            function mobileNavToogle() {
              document.querySelector('body').classList.toggle('mobile-nav-active');
              mobileNavToggleBtn.classList.toggle('bi-list');
              mobileNavToggleBtn.classList.toggle('bi-x');
            }

            mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

            document.querySelectorAll('#navmenu a').forEach(navmenu => {
              navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                  mobileNavToogle();
                }
              });
            });
          }


          // Optimize scroll event listeners using a single throttle function
            function throttle(func, limit) {
              let lastFunc;
              let lastRan;
              return function() {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                  func.apply(context, args);
                  lastRan = Date.now();
                  } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(function() {
                    if (Date.now() - lastRan >= limit) {
                      func.apply(context, args);
                      lastRan = Date.now();
                      }
                    }, limit - (Date.now() - lastRan));
            }
              };
                 }

            document.addEventListener('scroll', throttle(function() {
              toggleScrolled();
              toggleScrollTop();
              navmenuScrollspy();
               }, 100));

                    // Preloader removal: use only the animated removal for smooth UX
                    function initPreloader() {
                      var preloader = document.getElementById('preloader');
                      if (preloader) {
                        window.addEventListener('load', function () {
                          preloader.style.opacity = '0';
                          setTimeout(() => preloader.remove(), 500);
                        });
                      }
                    }
                                  } // <-- Close initGoogleTranslatePersistence
              // End of Google Translate persistence script

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

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
});              


// Supplier Discovery Form Handler
const SUPPLIER_DISCOVERY_WEB_APP = 'https://script.google.com/macros/s/YOUR_SUPPLIER_DISCOVERY_SCRIPT_ID/exec';
const supplierDiscoveryForm = document.getElementById('supplierDiscoveryForm');
const formStatus = document.getElementById('formStatus');
const imgInput = document.getElementById('productImage');

supplierDiscoveryForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.textContent = 'Processing your request...';

  // Basic validations
  if (!supplierDiscoveryForm.name.value.trim() || !supplierDiscoveryForm.email.value.trim()) {
    formStatus.textContent = 'Please fill in all required fields.';
    return;
  }
  
  if (!supplierDiscoveryForm.termsAgreement.checked) {
    formStatus.textContent = 'Please agree to the Terms of Service and Privacy Policy.';
    return;
  }
  
  if (!supplierDiscoveryForm.paymentMethod.value) {
    formStatus.textContent = 'Please select a payment method.';
    return;
  }
  
  if (imgInput.files[0] && imgInput.files[0].size > 5 * 1024 * 1024) {
    formStatus.textContent = 'Image exceeds 5MB limit.';
    return;
  }

  const fd = new FormData(supplierDiscoveryForm);
  // Add a client timestamp
  fd.append('clientTimestamp', new Date().toISOString());

  try {
    const res = await fetch(SUPPLIER_DISCOVERY_WEB_APP, { method: 'POST', body: fd });
    const txt = await res.text();
    let ok = res.ok;
    try {
      const j = JSON.parse(txt);
      ok = !!j.ok;
    } catch(_) {}
    
    if (ok) {
      formStatus.textContent = 'Request submitted successfully! Redirecting to payment...';
      
      // Get selected payment method
      const paymentMethod = supplierDiscoveryForm.paymentMethod.value;
      
      // Redirect to payment page with payment method and form data
      setTimeout(() => {
        const formData = new URLSearchParams(new FormData(supplierDiscoveryForm));
        const paymentUrl = `supplier-discovery-payment.html?paymentMethod=${paymentMethod}&${formData.toString()}`;
        
        window.location.href = paymentUrl;
      }, 1500);
    } else {
      formStatus.textContent = 'Error submitting request. Please try again.';
    }
  } catch (err) {
    formStatus.textContent = 'Network error. Please check your connection and try again.';
  }
});

