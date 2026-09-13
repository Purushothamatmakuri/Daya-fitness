console.log("Daya Fitness: Premium App Logic initialized.");

// ==========================================================================
// STATE MANAGEMENT & CONTROLLER
// ==========================================================================
let currentTheme = 'mens';
let activeClassFilter = 'all';

// Intersection Observer for scroll animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px' });

function initScrollReveal() {
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.classList.add('reveal-active');
    if (typeof revealObserver !== 'undefined' && revealObserver) {
      revealObserver.observe(el);
    }
  });
}

// Render dynamic content from database
function renderThemeContent(theme) {
  const data = DYA_CONFIG[theme];
  if (!data) return;

  // 1. Hero Content
  const heroTagline = document.getElementById('hero-tagline');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroPrimary = document.getElementById('hero-primary-cta');
  const heroSecondary = document.getElementById('hero-secondary-cta');

  if (heroTagline) heroTagline.innerHTML = `<span class="tagline-line"></span>${data.hero.tagline}`;
  if (heroTitle) heroTitle.innerHTML = data.hero.title;
  if (heroDesc) heroDesc.innerText = data.hero.desc;
  if (heroPrimary) {
    heroPrimary.innerText = data.hero.primaryCta;
    heroPrimary.href = "#contact";
  }
  if (heroSecondary) {
    heroSecondary.innerText = data.hero.secondaryCta;
    heroSecondary.href = "#membership";
  }

  // Hero Image Toggle (via body class triggers, preserving original CSS transitions)
  const imgMens = document.getElementById('hero-img-mens');
  const imgLadies = document.getElementById('hero-img-ladies');
  if (imgMens && imgLadies) {
    if (theme === 'mens') {
      imgMens.classList.add('active');
      imgLadies.classList.remove('active');
    } else {
      imgMens.classList.remove('active');
      imgLadies.classList.add('active');
    }
  }

  // 2. Why Choose (Bento) - Hidden in Ladies Studio mode, visible in Men's Gym mode
  const whyChooseSection = document.getElementById('why-choose');
  const whyChooseNavLinks = document.querySelectorAll('a[href="#why-choose"]');
  if (theme === 'ladies') {
    if (whyChooseSection) whyChooseSection.style.display = 'none';
    whyChooseNavLinks.forEach(link => {
      if (link.parentElement) link.parentElement.style.display = 'none';
    });
  } else {
    if (whyChooseSection) whyChooseSection.style.display = '';
    whyChooseNavLinks.forEach(link => {
      if (link.parentElement) link.parentElement.style.display = '';
    });

    const chooseTag = document.getElementById('why-choose-tag');
    const chooseTitle = document.getElementById('why-choose-title');
    const chooseSubtitle = document.getElementById('why-choose-subtitle');
    if (chooseTag) chooseTag.innerText = data.whyChoose.tag;
    if (chooseTitle) chooseTitle.innerText = data.whyChoose.title;
    if (chooseSubtitle) chooseSubtitle.innerText = data.whyChoose.subtitle;

    data.whyChoose.cards.forEach((card, idx) => {
      const imgEl = document.getElementById(`bento-img-${idx + 1}`);
      const iconEl = document.getElementById(`bento-icon-${idx + 1}`);
      const titleEl = document.getElementById(`bento-title-${idx + 1}`);
      const descEl = document.getElementById(`bento-desc-${idx + 1}`);

      if (imgEl) {
        imgEl.src = card.img;
        imgEl.setAttribute('width', '600');
        imgEl.setAttribute('height', idx === 1 ? '620' : '300');
        imgEl.setAttribute('decoding', 'async');
      }
      if (iconEl) iconEl.innerHTML = `<i class="${card.icon}"></i>`;
      if (titleEl) titleEl.innerText = card.title;
      if (descEl) descEl.innerText = card.desc;
    });
  }

  // 3. Equipment Showcase / Studio Gallery Toggle
  const headerEqTag = document.getElementById('equipment-tag');
  const headerEqTitle = document.getElementById('equipment-title');
  const headerEqSubtitle = document.getElementById('equipment-subtitle');
  const eqNavLinks = document.querySelectorAll('a[href="#equipment"]');
  const gallerySection = document.getElementById('gallery');
  const galleryNavLinks = document.querySelectorAll('a[href="#gallery"]');

  if (theme === 'ladies') {
    if (headerEqTag) headerEqTag.innerText = 'Visual Tour';
    if (headerEqTitle) headerEqTitle.innerText = 'STUDIO GALLERY';
    if (headerEqSubtitle) headerEqSubtitle.innerText = 'Explore our exclusive, state-of-the-art Daya Ladies Studio facility.';
    eqNavLinks.forEach(link => link.innerText = 'Studio Gallery');
    if (gallerySection) gallerySection.style.display = 'none';
    galleryNavLinks.forEach(link => {
      if (link.parentElement) link.parentElement.style.display = 'none';
    });

    const eqContainer = document.getElementById('equipment-container');
    if (eqContainer && data.studioGallery) {
      const images = data.studioGallery.filter(item => item.type === 'image');
      const video = data.studioGallery.find(item => item.type === 'video');

      eqContainer.className = 'studio-gallery-wrapper';
      eqContainer.innerHTML = `
        <div class="studio-gallery-grid">
          ${images.map(item => `
            <div class="equipment-card" data-id="${item.id}">
              <div class="equipment-img-wrapper" style="height: 300px;">
                <img src="${item.src}" alt="${item.title}" class="equipment-img" loading="lazy" width="400" height="300" decoding="async" style="object-fit: cover; width: 100%; height: 100%;">
              </div>
              <div class="equipment-content">
                <h3 class="equipment-title">${item.title}</h3>
                <p class="equipment-desc">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
        ${video ? `
          <div class="studio-video-container" style="margin-top: 1rem; width: 100%;">
            <div class="equipment-card studio-video-card" data-id="${video.id}" style="width: 100%;">
              <div class="equipment-img-wrapper studio-video-wrapper">
                <video src="${video.src}" controls playsinline preload="metadata" class="equipment-img" style="object-fit: cover; width: 100%; height: 100%;"></video>
              </div>
              <div class="equipment-content">
                <h3 class="equipment-title">${video.title}</h3>
                <p class="equipment-desc">${video.desc}</p>
              </div>
            </div>
          </div>
        ` : ''}
      `;
    }
  } else {
    if (headerEqTag) headerEqTag.innerText = 'Elite Machinery';
    if (headerEqTitle) headerEqTitle.innerText = 'PREMIUM EQUIPMENT SHOWCASE';
    if (headerEqSubtitle) headerEqSubtitle.innerText = 'Train on elite-grade machinery maintained to absolute safety and comfort standards.';
    eqNavLinks.forEach(link => link.innerText = 'Equipment');
    if (gallerySection) gallerySection.style.display = '';
    galleryNavLinks.forEach(link => {
      if (link.parentElement) link.parentElement.style.display = '';
    });

    const eqContainer = document.getElementById('equipment-container');
    if (eqContainer) {
      eqContainer.className = 'equipment-grid';
      eqContainer.innerHTML = data.equipment.map(eq => `
        <div class="equipment-card" data-id="${eq.id}">
          <div class="equipment-img-wrapper">
            <img src="${eq.img}" alt="${eq.title}" class="equipment-img" loading="lazy" width="340" height="220" decoding="async">
          </div>
          <div class="equipment-content">
            <h3 class="equipment-title">${eq.title}</h3>
            <p class="equipment-desc">${eq.desc}</p>
          </div>
        </div>
      `).join('');

      eqContainer.querySelectorAll('.equipment-card').forEach(card => {
        card.addEventListener('click', () => {
          const eqId = card.getAttribute('data-id');
          openEquipmentModal(theme, eqId);
        });
      });
    }
  }

  // 4. Programs Grid (Filtered)
  renderFilteredPrograms(theme, activeClassFilter);

  // 5. Membership pricing
  const membershipContainer = document.getElementById('membership-container');
  if (membershipContainer) {
    const pricingTag = document.getElementById('membership-tag');
    const pricingTitle = document.getElementById('membership-title');
    const pricingSubtitle = document.getElementById('membership-subtitle');
    if (pricingTag) pricingTag.innerText = theme === 'mens' ? 'Memberships' : 'Studio Access';
    if (pricingTitle) pricingTitle.innerText = theme === 'mens' ? 'MEMBERSHIP PLANS' : 'STUDIO MEMBERSHIPS';
    if (pricingSubtitle) pricingSubtitle.innerText = theme === 'mens'
      ? 'Simple, transparent investment in your strength. Access all standard areas.'
      : 'Bespoke fitness packages designed around privacy, comfort, and state-of-the-art parameters.';

    membershipContainer.innerHTML = data.memberships.map(plan => `
      <div class="pricing-card ${plan.popular ? 'popular' : ''}">
        ${plan.popular ? `<span class="popular-badge">Most Popular</span>` : ''}
        <span class="plan-name">${plan.name}</span>
        <div class="plan-price-row">
          <span class="plan-currency">₹</span>
          <span class="plan-price">${plan.price}</span>
          <span class="plan-period">${plan.period}</span>
        </div>
        <ul class="plan-features">
          ${plan.features.map(f => `
            <li class="feature-item"><i class="ph-bold ph-check-circle"></i> ${f}</li>
          `).join('')}
        </ul>
        <a href="#contact" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-enroll-plan" data-plan="${plan.name}">Select Plan</a>
      </div>
    `).join('');

    // Add select plan clicks
    membershipContainer.querySelectorAll('.btn-enroll-plan').forEach(btn => {
      btn.addEventListener('click', () => {
        const planName = btn.getAttribute('data-plan');
        const contactMsgField = document.getElementById('message');
        if (contactMsgField) {
          contactMsgField.value = `Hi Daya Fitness, I would like to sign up for the ${planName} of the ${theme === 'mens' ? "Men's Gym" : "Ladies Studio"} experience. Please contact me with onboarding details.`;
        }
      });
    });
  }

  // 6. Meet Our Trainers
  const trainersSection = document.getElementById('trainers');
  const trainersNavLink = document.querySelector('a[href="#trainers"]');

  if (theme === 'mens') {
    if (trainersSection) trainersSection.style.display = '';
    if (trainersNavLink && trainersNavLink.parentElement) {
      trainersNavLink.parentElement.style.display = '';
    }

    const trainersContainer = document.getElementById('trainers-container');
    if (trainersContainer) {
      const trainersTag = document.getElementById('trainers-tag');
      const trainersTitle = document.getElementById('trainers-title');
      const trainersSubtitle = document.getElementById('trainers-subtitle');
      if (trainersTag) trainersTag.innerText = 'Head Coach';
      if (trainersTitle) trainersTitle.innerText = 'MEET OUR HEAD COACH';
      if (trainersSubtitle) trainersSubtitle.innerText = 'Head Coach P. Sathish personal training representation.';

      // Single head coach focus
      const headCoach = data.trainers[0];

      trainersContainer.innerHTML = `
        <div class="head-coach-split">
          <div class="head-coach-left">
            <span class="trainer-role">${headCoach.role}</span>
            <h3 class="trainer-name">${headCoach.name}</h3>
            <p class="trainer-desc">${headCoach.desc}</p>
            <div class="trainer-credentials">
              <div class="cred-item"><i class="ph ph-certificate"></i> Certified Personal Trainer (CPT)</div>
              <div class="cred-item"><i class="ph ph-activity"></i> Specialist in Biomechanics & Hypertrophy</div>
              <div class="cred-item"><i class="ph ph-heart"></i> CPR/AED Certified</div>
            </div>
            <div class="trainer-socials">
              <a href="${headCoach.socials.whatsapp}" target="_blank" class="trainer-social-link" aria-label="WhatsApp"><i class="ph-fill ph-whatsapp-logo"></i></a>
              <a href="${headCoach.socials.instagram}" target="_blank" class="trainer-social-link" aria-label="Instagram"><i class="ph-fill ph-instagram-logo"></i></a>
            </div>
            <a href="#contact" class="btn btn-primary head-coach-cta" style="margin-top: 1.5rem;">Book Session with ${headCoach.name.replace('Coach ', '')}</a>
          </div>
          <div class="head-coach-right">
            <div class="head-coach-img-wrapper">
              <img src="${headCoach.photo}" alt="${headCoach.name}" class="head-coach-photo" loading="lazy" width="480" height="480" decoding="async">
            </div>
          </div>
        </div>
      `;
    }
  } else {
    if (trainersSection) trainersSection.style.display = 'none';
    if (trainersNavLink && trainersNavLink.parentElement) {
      trainersNavLink.parentElement.style.display = 'none';
    }
  }

  // 7. Success Stories (Reviews Marquee)
  const successTag = document.getElementById('success-tag');
  const successTitle = document.getElementById('success-title');
  const successSubtitle = document.getElementById('success-subtitle');
  if (successTag) successTag.innerText = theme === 'mens' ? 'Achievers Profile' : 'Empowered Members';
  if (successTitle) successTitle.innerText = theme === 'mens' ? 'SUCCESS STORIES' : 'MEMBER ACHIEVEMENTS';
  if (successSubtitle) successSubtitle.innerText = theme === 'mens'
    ? 'Verified reviews and feedback from our Google Maps members.'
    : 'Real client feedback and reviews from our exclusive Arilova community.';

  const transformationsContainer = document.getElementById('transformations-container');
  if (transformationsContainer) {
    transformationsContainer.style.display = 'none';
  }

  const testimonialsContainer = document.getElementById('testimonials-container');
  if (testimonialsContainer) {
    const testimonialCards = data.testimonials.map(t => `
      <div class="marquee-card">
        <span class="quote-icon"><i class="ph-fill ph-quotes"></i></span>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="rating-stars">
          ${Array(t.rating).fill('<i class="ph-fill ph-star"></i>').join('')}
        </div>
        <div class="testimonial-author">
          <div class="author-avatar ${t.avatarClass}">${t.avatar}</div>
          <div class="author-meta-box">
            <h4 class="author-name">${t.author}</h4>
            <span class="author-platform">
              <svg viewBox="0 0 24 24" fill="#EA4335" width="12" height="12">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 12 5.92 12 12s4.92 11 11.24 11c6.59 0 10.99-4.63 10.99-11.18 0-.75-.08-1.32-.19-1.815H12.24z" />
              </svg>
              Google Review
            </span>
          </div>
        </div>
      </div>
    `).join('');

    // Duplicate testimonials for horizontal scroll marquee effect
    testimonialsContainer.innerHTML = testimonialCards + testimonialCards;
  }

  // 8. Gallery
  const galleryContainer = document.getElementById('gallery-container');
  if (galleryContainer) {
    galleryContainer.innerHTML = data.gallery.map(img => `
      <div class="gallery-card">
        <img src="${img}" alt="Daya Studio Gallery Grid" class="gallery-img" loading="lazy" width="300" height="300" decoding="async">
      </div>
    `).join('');
  }

  // 9. Locations (Highlight active location dynamically)
  const locationsContainer = document.getElementById('locations-container');
  if (locationsContainer) {
    locationsContainer.innerHTML = data.locations.branches.map(b => `
      <div class="location-card ${b.id === data.locations.activeId ? 'active' : ''}" id="${b.id}">
        <span class="location-badge">${b.id === 'loc-mens' ? "Men's & Unisex" : 'Ladies Only'}</span>
        <h3 class="location-title">${b.name}</h3>
        <div class="location-details">
          <div class="loc-item">
            <i class="ph ph-map-pin"></i>
            <div class="loc-item-text">
              <h4>Address</h4>
              <p>${b.address}</p>
            </div>
          </div>
          <div class="loc-item">
            <i class="ph ph-phone"></i>
            <div class="loc-item-text">
              <h4>Contact & WhatsApp</h4>
              <p>${b.phone}</p>
            </div>
          </div>
          <div class="loc-item">
            <i class="ph ph-clock"></i>
            <div class="loc-item-text">
              <h4>Timings</h4>
              <p>${b.timings}</p>
            </div>
          </div>
        </div>
        <div class="location-map-wrapper">
          <iframe src="${b.mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-label="${b.name} Google Map Location" style="border:0; width:100%; height:100%;"></iframe>
        </div>
      </div>
    `).join('');
  }

  // 10. Contact Details
  const contactTag = document.getElementById('contact-tag');
  const contactTitle = document.getElementById('contact-title');
  const contactSubtitle = document.getElementById('contact-subtitle');
  if (contactTag) contactTag.innerText = data.contact.tag;
  if (contactTitle) contactTitle.innerText = data.contact.title;
  if (contactSubtitle) contactSubtitle.innerText = data.contact.subtitle;

  const contactInfo = document.getElementById('contact-info-container');
  if (contactInfo) {
    contactInfo.innerHTML = data.contact.details.map(d => `
      <div class="loc-item">
        <i class="${d.icon}"></i>
        <div class="loc-item-text">
          <h4>${d.title}</h4>
          <p>${d.val}</p>
        </div>
      </div>
    `).join('');
  }

  // Footer timings
  const footerHours = document.getElementById('footer-hours');
  if (footerHours) {
    if (theme === 'mens') {
      footerHours.innerHTML = `
        <li><span class="text-accent">Mon - Sat:</span> 5:00 AM - 10:00 PM</li>
        <li><span class="text-accent">Sunday:</span> 6:00 AM - 12:00 PM</li>
      `;
    } else {
      footerHours.innerHTML = `
        <li><span class="text-accent">Mon - Sat:</span> 6:00 AM - 9:00 PM</li>
        <li><span class="text-accent">Sunday:</span> Closed</li>
      `;
    }
  }

  // Footer Socials
  const footerSocials = document.getElementById('footer-socials');
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="https://www.instagram.com/daya_fitnessgym?igsh=MXN6d3gxZ2pqODhieg==" target="_blank" class="social-circle-link" aria-label="Instagram"><i class="ph-fill ph-instagram-logo"></i></a>
      <a href="https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20inquiring%20about%20memberships." target="_blank" class="social-circle-link" aria-label="WhatsApp"><i class="ph-fill ph-whatsapp-logo"></i></a>
    `;
  }

  // WhatsApp CTA Link Update
  const waCta = document.getElementById('whatsapp-cta');
  if (waCta) {
    if (theme === 'mens') {
      waCta.href = "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20interested%20in%20Men's%20Gym%20training.";
    } else {
      waCta.href = "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20interested%20in%20Ladies%20Studio%20training.";
    }
  }

  // Re-run scroll reveal alignments
  initScrollReveal();
}

// Render dynamic program grid based on category filter
function renderFilteredPrograms(theme, category) {
  const data = DYA_CONFIG[theme];
  if (!data) return;

  const programsGrid = document.getElementById('programs-grid-container');
  if (!programsGrid) return;

  const filtered = data.programs.filter(p => category === 'all' || p.category === category);

  programsGrid.innerHTML = filtered.map(p => `
    <div class="program-card" data-id="${p.id}">
      <div class="program-img-container">
        <img src="${p.img}" alt="${p.title}" class="program-img" loading="lazy" width="340" height="200" decoding="async">
        <span class="program-badge">${p.category}</span>
      </div>
      <div class="program-content">
        <h3 class="program-title">${p.title}</h3>
        <p class="program-desc">${p.desc}</p>
        <div class="program-meta">
          <span class="meta-item"><i class="ph-bold ph-clock"></i> ${p.duration}</span>
          <span class="meta-item">
            Intensity:
            <div class="intensity-bar">
              ${Array(5).fill(0).map((_, i) => `
                <div class="intensity-dot ${i < p.intensity ? 'fill' : ''}"></div>
              `).join('')}
            </div>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind click event on program cards for details modal
  programsGrid.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('click', () => {
      const classId = card.getAttribute('data-id');
      openProgramModal(theme, classId);
    });
  });
}

// ==========================================================================
// MODAL ENGINE
// ==========================================================================
const classModal = document.getElementById('class-modal');
const modalClose = document.getElementById('modal-close');
const modalCloseSec = document.getElementById('modal-close-secondary');
const modalEnroll = document.getElementById('modal-enroll-btn');

const mImg = document.getElementById('modal-img');
const mCat = document.getElementById('modal-category');
const mTitle = document.getElementById('modal-title');
const mDuration = document.getElementById('modal-duration');
const mIntensity = document.getElementById('modal-intensity');
const mDesc = document.getElementById('modal-desc');

let lastSelectedProgramName = "";

function openProgramModal(theme, id) {
  const data = DYA_CONFIG[theme];
  const item = data.programs.find(p => p.id === id);
  if (!item) return;

  lastSelectedProgramName = item.title;

  if (mImg) {
    mImg.src = item.img;
    mImg.setAttribute('width', '600');
    mImg.setAttribute('height', '250');
    mImg.setAttribute('decoding', 'async');
  }
  if (mCat) mCat.innerText = item.category;
  if (mTitle) mTitle.innerText = item.title;
  if (mDuration) mDuration.innerText = item.duration;
  if (mDesc) mDesc.innerText = `${item.desc} Blueprint details: ${item.blueprint}`;

  if (mIntensity) {
    mIntensity.innerHTML = Array(5).fill(0).map((_, i) => `
      <div class="intensity-dot ${i < item.intensity ? 'fill' : ''}"></div>
    `).join('');
  }

  if (classModal) {
    classModal.classList.add('open');
    classModal.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('modal-open');
}

function closeProgramModal() {
  if (classModal) {
    classModal.classList.remove('open');
    classModal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}

if (modalClose) modalClose.addEventListener('click', closeProgramModal);
if (modalCloseSec) modalCloseSec.addEventListener('click', closeProgramModal);
if (classModal) {
  classModal.addEventListener('click', (e) => {
    if (e.target === classModal) closeProgramModal();
  });
}

if (modalEnroll) {
  modalEnroll.addEventListener('click', () => {
    closeProgramModal();
    const contactMsg = document.getElementById('message');
    if (contactMsg) {
      contactMsg.value = `Hi Daya Fitness, I'm interested in enrolling for the "${lastSelectedProgramName}" program in the ${currentTheme === 'mens' ? "Men's Gym" : "Ladies Studio"}. Please contact me.`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Equipment Modal Specs
const eqModal = document.getElementById('equipment-modal');
const eqModalClose = document.getElementById('equipment-modal-close');
const eqModalCloseSec = document.getElementById('equipment-modal-close-sec');
const eqModalEnroll = document.getElementById('eq-modal-enroll-btn');

const eqImg = document.getElementById('eq-modal-img');
const eqTitle = document.getElementById('eq-modal-title');
const eqDesc = document.getElementById('eq-modal-desc');
const eqSpecs = document.getElementById('eq-modal-specs');

let lastSelectedEqName = "";

function openEquipmentModal(theme, id) {
  const data = DYA_CONFIG[theme];
  const item = data.equipment.find(e => e.id === id);
  if (!item) return;

  lastSelectedEqName = item.title;

  if (eqImg) {
    eqImg.src = item.img;
    eqImg.setAttribute('width', '600');
    eqImg.setAttribute('height', '250');
    eqImg.setAttribute('decoding', 'async');
  }
  if (eqTitle) eqTitle.innerText = item.title;
  if (eqDesc) eqDesc.innerText = item.desc;
  if (eqSpecs) eqSpecs.innerText = item.specs;

  if (eqModal) {
    eqModal.classList.add('open');
    eqModal.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('modal-open');
}

function closeEquipmentModal() {
  if (eqModal) {
    eqModal.classList.remove('open');
    eqModal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}

if (eqModalClose) eqModalClose.addEventListener('click', closeEquipmentModal);
if (eqModalCloseSec) eqModalCloseSec.addEventListener('click', closeEquipmentModal);
if (eqModal) {
  eqModal.addEventListener('click', (e) => {
    if (e.target === eqModal) closeEquipmentModal();
  });
}

if (eqModalEnroll) {
  eqModalEnroll.addEventListener('click', () => {
    closeEquipmentModal();
    const contactMsg = document.getElementById('message');
    if (contactMsg) {
      contactMsg.value = `Hi Daya Fitness, I'm interested in inquiring about training using the "${lastSelectedEqName}" equipment.`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ==========================================================================
// THEME SWITCH TOGGLE LOGIC
// ==========================================================================
const btnToggleMens = document.getElementById('toggle-mens');
const btnToggleLadies = document.getElementById('toggle-ladies');

function switchTheme(theme) {
  if (theme === currentTheme) return;

  currentTheme = theme;
  localStorage.setItem('dya_active_theme', theme);

  // Apply visual theme transitions
  document.body.className = `theme-${theme}`;

  if (theme === 'mens') {
    if (btnToggleMens) {
      btnToggleMens.classList.add('active');
      btnToggleMens.setAttribute('aria-expanded', 'true');
    }
    if (btnToggleLadies) {
      btnToggleLadies.classList.remove('active');
      btnToggleLadies.setAttribute('aria-expanded', 'false');
    }
  } else {
    if (btnToggleMens) {
      btnToggleMens.classList.remove('active');
      btnToggleMens.setAttribute('aria-expanded', 'false');
    }
    if (btnToggleLadies) {
      btnToggleLadies.classList.add('active');
      btnToggleLadies.setAttribute('aria-expanded', 'true');
    }
  }

  // Crossfade Content Swap
  const sections = document.querySelectorAll('.hero-content, #bento-container, #equipment-container, #membership-container, #trainers-container, #transformations-container, #testimonials-container, #gallery-container, #locations-container, #contact-info-container');

  // Fade out
  sections.forEach(s => {
    s.style.opacity = 0;
    s.style.transform = 'translateY(10px)';
    s.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  setTimeout(() => {
    // Render new content
    renderThemeContent(theme);

    // Fade back in
    sections.forEach(s => {
      s.style.opacity = 1;
      s.style.transform = 'translateY(0)';
    });
  }, 300);
}

if (btnToggleMens) {
  btnToggleMens.addEventListener('click', () => switchTheme('mens'));
}
if (btnToggleLadies) {
  btnToggleLadies.addEventListener('click', () => switchTheme('ladies'));
}

// ==========================================================================
// DISCIPLINE PROGRAM FILTERS
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeClassFilter = btn.getAttribute('data-category');
    renderFilteredPrograms(currentTheme, activeClassFilter);
  });
});

// ==========================================================================
// NAVIGATION HEADER SCROLL EFFECT
// ==========================================================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}, { passive: true });

// Navigation Link Active states & Mobile Drawer Close
const navLinks = document.querySelectorAll('.nav-links a');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-links');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    if (navMenu) {
      navMenu.classList.remove('active');
      const toggleIcon = navToggle ? navToggle.querySelector('i') : null;
      if (toggleIcon) toggleIcon.className = 'ph ph-list';
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

if (navToggle && navMenu) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    const toggleIcon = navToggle.querySelector('i');
    const isOpen = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (toggleIcon) {
      if (isOpen) {
        toggleIcon.className = 'ph ph-x';
      } else {
        toggleIcon.className = 'ph ph-list';
      }
    }
  });
}

// ==========================================================================
// FORM SUBMISSION HANDLERS
// ==========================================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('form-submit-btn');
    const btnText = btn.innerHTML;

    btn.innerHTML = '<i class="ph ph-spinner" style="animation: spin 1s linear infinite; margin-right: 8px;"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      alert("Thank you for choosing Daya Fitness! Our consultants will contact you within 24 hours to schedule your session.");
      contactForm.reset();
      btn.innerHTML = btnText;
      btn.disabled = false;
    }, 1500);
  });
}

const newsletterForm = document.getElementById('newsletter-form-el');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const btn = newsletterForm.querySelector('button');

    btn.disabled = true;
    setTimeout(() => {
      alert(`Success! ${input.value} has been subscribed to Daya Fitness announcements.`);
      newsletterForm.reset();
      btn.disabled = false;
    }, 1000);
  });
}

// ==========================================================================
// ON PAGE LOAD INITIALIZATION
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  // Check user preference
  const savedTheme = localStorage.getItem('dya_active_theme');
  if (savedTheme === 'ladies') {
    currentTheme = 'ladies';
    document.body.className = 'theme-ladies';
    if (btnToggleMens) {
      btnToggleMens.classList.remove('active');
      btnToggleMens.setAttribute('aria-expanded', 'false');
    }
    if (btnToggleLadies) {
      btnToggleLadies.classList.add('active');
      btnToggleLadies.setAttribute('aria-expanded', 'true');
    }
  } else {
    currentTheme = 'mens';
    document.body.className = 'theme-mens';
    if (btnToggleMens) {
      btnToggleMens.classList.add('active');
      btnToggleMens.setAttribute('aria-expanded', 'true');
    }
    if (btnToggleLadies) {
      btnToggleLadies.classList.remove('active');
      btnToggleLadies.setAttribute('aria-expanded', 'false');
    }
  }

  // Render content
  renderThemeContent(currentTheme);

  // Initialize Scroll Reveals
  setTimeout(initScrollReveal, 200);
});
