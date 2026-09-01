console.log("Daya Fitness: Premium Redesign Script initialized.");

// ==========================================================================
// DAYA FITNESS CENTRALIZED CONFIGURATION DATABASE
// ==========================================================================
const DYA_CONFIG = {
  mens: {
    hero: {
      tagline: "BUILD STRENGTH. DISCIPLINE. LEGACY.",
      title: "BUILD STRENGTH.<br>PUSH YOUR LIMITS.<br>BECOME YOUR BEST.",
      desc: "Premium high-performance training environment equipped with elite personal coaching, industrial aesthetics, and top-tier heavy iron machinery.",
      primaryCta: "Join Now",
      secondaryCta: "View Membership"
    },
    whyChoose: {
      tag: "Core Pillars",
      title: "WHY CHOOSE DAYA FITNESS",
      subtitle: "A modern, creative approach to elite physical transformation and premium lifestyle fitness.",
      cards: [
        {
          img: "images/strength_training.png",
          icon: "ph-bold ph-barbell",
          title: "Conditioning",
          desc: "High-intensity athletic conditioning programs designed to shock your system, spike metabolism, and forge an unbreakable cardiovascular engine."
        },
        {
          img: "images/personal_training.png",
          icon: "ph-bold ph-user-focus",
          title: "Coaching",
          desc: "One-on-one professional guidance directly from Head Coach P. Sathish. Customized programming, strict technique checks, and nutritional blueprints."
        },
        {
          img: "images/cardio_hiit.png",
          icon: "ph-bold ph-heartbeat",
          title: "Cardio Zone",
          desc: "State-of-the-art conditioning zone with top-tier treadmills and spin cycles to expand lung capacity and accelerate fat loss."
        },
        {
          img: "images/zumba_yoga.png",
          icon: "ph-bold ph-users-three",
          title: "Community",
          desc: "Join a high-discipline, high-intensity training community that keeps you motivated, consistent, and accountable daily."
        }
      ]
    },
    equipment: [
      {
        id: "eq-card-1",
        img: "images/Strength.jpeg",
        title: "Specialized Strength Stacks",
        desc: "Selectorized plate-loaded machines built to isolate and optimize resistance arcs.",
        specs: "Brand: Jerai Fitness / Being Strong | Stack Load: 100kg Max | Adjustable Angles: 6 Positions"
      },
      {
        id: "eq-card-2",
        img: "images/cardio.jpeg",
        title: "Premium Cardio Platforms",
        desc: "High-performance treadmills, spin cycles, and commercial air rowers.",
        specs: "Brand: Life Fitness | Interactive Monitor: Included | Max Speed: 22 km/h"
      },
      {
        id: "eq-card-3",
        img: "images/Free_weights.jpeg",
        title: "Dedicated Free Weights",
        desc: "Rubber dumbbells up to 40kg, Olympic bars, and deadlift platforms.",
        specs: "Dumbbell Stack: 2.5kg - 40kg | Barbells: Olympic Grade | High-density rubberized"
      },
      {
        id: "eq-card-4",
        img: "images/Dumbell.jpeg",
        title: "Heavy Duty Leverage Machines",
        desc: "Leverage plate-loaded machines for safe, controlled mechanical muscle fatigue.",
        specs: "Brand: Hammer Strength | Max Load: 300kg | Target: Chest, Back, Legs"
      }
    ],
    programs: [
      {
        id: "class-card-1",
        category: "strength",
        title: "Strength & Powerlifting Blueprint",
        desc: "Master compound strength movements focusing entirely on raw force production. Barbell mechanics and leverage optimization.",
        duration: "60 Mins",
        intensity: 4,
        img: "images/strength_training.png",
        blueprint: "Squat, Bench Press, Deadlift mechanics, leverage adjustment, structural stability, and peak force output under strict supervision."
      },
      {
        id: "class-card-2",
        category: "hiit",
        title: "High-Intensity Cardio Conditioning",
        desc: "A rapid metabolic conditioning split designed to maximize VO2 max and burn body fat. Kettlebells and metabolic drills.",
        duration: "45 Mins",
        intensity: 5,
        img: "images/cardio_hiit.png",
        blueprint: "Rowing intervals, air bike pacing, kettlebell circuits, high-frequency bodyweight drills in structured target intervals."
      },
      {
        id: "class-card-3",
        category: "yoga",
        title: "Flexibility & Mobility Yoga",
        desc: "Structured joint mobility and active recovery sequences. Perfect for active recovery, mindfulness, and structural alignment.",
        duration: "50 Mins",
        intensity: 2,
        img: "images/zumba_yoga.png",
        blueprint: "Range of motion expansion, muscular flexibility improvements, spinal alignment checks, and systemic soreness reduction."
      },
      {
        id: "class-card-4",
        category: "boxing",
        title: "Fighter Boxing Conditioning",
        desc: "Train like a competitive fighter. Heavy bag work, striking drills, structural movement, rapid footwork, and core rotations.",
        duration: "60 Mins",
        intensity: 4,
        img: "images/fat_loss.png",
        blueprint: "Boxing mechanics, heavy bag combinations, pad work drills, cardiovascular spikes, and core rotations."
      },
      {
        id: "class-card-5",
        category: "strength",
        title: "Muscle Building & Hypertrophy",
        desc: "Hypertrophy-focused training splits mapping direct volume blocks. Target specific muscle groups to stimulate dense growth.",
        duration: "50 Mins",
        intensity: 3,
        img: "images/personal_training.png",
        blueprint: "Volume-based training targeting localized muscle groups, strict mechanical tempo control, and progressive overload tracking."
      },
      {
        id: "class-card-6",
        category: "hiit",
        title: "Core & Abs Interval Burn",
        desc: "High-speed abdominal intervals designed to shred body fat while building deep dynamic core stability and stamina.",
        duration: "30 Mins",
        intensity: 4,
        img: "images/weight_gain.png",
        blueprint: "Core & abs intervals targeting rectus abdominis, obliques, transverse abdominis, lower back stability, and internal pressure."
      }
    ],
    memberships: [
      {
        name: "1 Month Plan",
        price: "1,000",
        period: "/Mo",
        features: ["Full gym access", "Cardio & strength equipment", "Lockers & change rooms", "Personal Coaching Add-on Available", "1x Biometric Review per cycle"],
        popular: false
      },
      {
        name: "3 Months Plan",
        price: "2,500",
        period: "/3 Mo",
        features: ["Full gym access", "Cardio & strength equipment", "Lockers & change rooms", "Personal Coaching Add-on Available", "1x Biometric Review per cycle"],
        popular: true
      },
      {
        name: "1 Year Plan",
        price: "8,000",
        period: "/Yr",
        features: ["Full gym access", "Cardio & strength equipment", "Lockers & change rooms", "Personal Coaching Add-on Included", "1x Biometric Review per cycle"],
        popular: false
      }
    ],
    trainers: [
      {
        name: "Coach P. Sathish",
        role: "Head Coach",
        desc: "Certified strength coach with 8+ years experience guiding high-performance athletic transformations.",
        photo: "images/Trainer.jpeg",
        socials: { instagram: "https://www.instagram.com/daya_fitnessgym?igsh=MXN6d3gxZ2pqODhieg==", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Sathish,%20I'm%20interested%20in%20Men's%20Gym%20Personal%20Training." }
      },
      {
        name: "Coach Ramji",
        role: "Assistant Trainer",
        desc: "Certified strength coach specializing in hypertrophy training splits and compound bar mechanics.",
        photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Ramji,%20I'm%20interested%20in%20Strength%20Training." }
      },
      {
        name: "Coach Abhi",
        role: "Conditioning Specialist",
        desc: "HIIT and boxing performance trainer focusing on fat loss and cardiovascular output.",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Abhi,%20I'm%20interested%20in%20Cardio%20Conditioning." }
      }
    ],
    testimonials: [
      {
        author: "Abhilash Vanaparthi",
        text: "Best quality equipment, Great maintenance. Friendly Coach.. with good training abilities. Cardio to strength we can access full machinery in the gym.",
        platform: "Google Review",
        rating: 5,
        avatar: "A",
        avatarClass: "avatar-red"
      },
      {
        author: "Ramji Rayi",
        text: "It's good gym. Reach your fitness goals. Very friendly coach.",
        platform: "Google Review",
        rating: 5,
        avatar: "R",
        avatarClass: "avatar-blue"
      },
      {
        author: "Nithin Sai Sri",
        text: "Good equipment with good trainers and friendly atmosphere.",
        platform: "Google Review",
        rating: 5,
        avatar: "N",
        avatarClass: "avatar-green"
      }
    ],
    transformations: [
      "images/transform1.jpg",
      "images/Transfom1..jpeg",
      "images/transform3.jpeg",
      "images/transform4.jpeg"
    ],
    gallery: [
      "images/Strength.jpeg",
      "images/cardio.jpeg",
      "images/Free_weights.jpeg",
      "images/Dumbell.jpeg",
      "images/Zumba_yoga.jpeg",
      "images/Strength.jpeg"
    ],
    locations: {
      activeId: "loc-mens",
      branches: [
        {
          id: "loc-mens",
          name: "DAYA Fitness Gym (Men's & Unisex)",
          address: "D.No: 8-125/1, 1st Floor, Thota Garuvu, Arilova, Visakhapatnam, AP 530040 (Opp. Muthoot Mini Finance)",
          phone: "+91 90301 00350",
          timings: "Mon - Sat: 5:00 AM - 10:00 PM | Sunday: 6:00 AM - 12:00 PM",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3799.5675645405754!2d83.3192147!3d17.7650035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395dafc22f90a5%3A0xcb7a0a31d5f80da7!2sDaya%20Fitness%20Gym%20UNISEX%20GYM!5e0!3m2!1sen!2sin!4v1780641089909!5m2!1sen!2sin",
          whatsapp: "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20inquiring%20about%20the%20Men's%20Gym%20branch%20timings."
        },
        {
          id: "loc-ladies",
          name: "DAYA Fitness Ladies Studio",
          address: "Opp. Hill Residency, Arilova, Visakhapatnam, AP 530040",
          phone: "+91 90301 00350",
          timings: "Mon - Sat: 6:00 AM - 9:00 PM | Sunday: Closed",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.5381282051153!2d83.3156944!3d17.7663889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ1JzU5LjAiTiA4M8KwMTgnNTYuNSJF!5e0!3m2!1sen!2sin!4v1784106011314!5m2!1sen!2sin",
          whatsapp: "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20inquiring%20about%20the%20Ladies%20Studio%20branch%20timings."
        }
      ]
    },
    contact: {
      tag: "Get In Touch",
      title: "START YOUR JOURNEY",
      subtitle: "Ready to forge your legacy? Walk in, call, or message us below.",
      details: [
        { icon: "ph ph-phone", title: "Call & Message", val: "+91 90301 00350" },
        { icon: "ph ph-map-pin", title: "Gym Location", val: "D.No: 8-125/1, 1st Floor, Thota Garuvu, Arilova, Visakhapatnam, AP 530040" },
        { icon: "ph ph-envelope", title: "Email Queries", val: "hello@dayafitness.com" }
      ]
    }
  },
  ladies: {
    hero: {
      tagline: "ELEGANT. CONFIDENT. EXCLUSIVE.",
      title: "STRONG.<br>CONFIDENT.<br>EMPOWERED.",
      desc: "Bespoke ladies-only training environment. Luxury modern interiors, fully private training suites, and state-of-the-art imported fitness machinery.",
      primaryCta: "Book Free Trial",
      secondaryCta: "Explore Membership"
    },
    whyChoose: {
      tag: "Exclusivity & Privacy",
      title: "WHY CHOOSE DAYA LADIES STUDIO",
      subtitle: "An elegant, completely secure fitness space built to provide maximum comfort and elite results.",
      cards: [
        {
          img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
          icon: "ph-bold ph-sparkles",
          title: "Luxury Space",
          desc: "Enjoy an exclusive, premium, ladies-only workout studio featuring customized warm lighting and imported elite machinery designed for your privacy and style."
        },
        {
          img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
          icon: "ph-bold ph-crown",
          title: "Elite Coaching",
          desc: "Receive bespoke guidance from our certified female trainers. Get customized workout splits, mobility programs, and personal accountability sessions."
        },
        {
          img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
          icon: "ph-bold ph-trend-up",
          title: "Cardio & Sculpt",
          desc: "Sculpt your physique in our dedicated premium cardio zone, featuring imported stairmasters, treadmills, and high-frequency mobility alignment equipment."
        },
        {
          img: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=600",
          icon: "ph-bold ph-shield-check",
          title: "Privacy & Comfort",
          desc: "Work out with absolute comfort, security, and premium style in a supportive environment tailored specifically to motivate women."
        }
      ]
    },
    equipment: [
      {
        id: "eq-card-1",
        img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600",
        title: "Premium Imported Cardio",
        desc: "Luxurious commercial treadmills and stairmasters programmed with custom training routines.",
        specs: "Brand: Technogym | Touch Console: 15.6\" HD | Real-time Heart Rate: Included"
      },
      {
        id: "eq-card-2",
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600",
        title: "Linear Smith Machine",
        desc: "Ultra-smooth counter-balanced smith machine for safe, isolated squatting and pressing.",
        specs: "Brand: Technogym | Bar weight: 5kg starting | Safety stops: 12 lock positions"
      },
      {
        id: "eq-card-3",
        img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
        title: "Functional Cable Trainers",
        desc: "Versatile double cable crossover systems with premium handles for full-body sculpting.",
        specs: "Brand: Life Fitness | Pull Ratio: 1:2 | Cable Travel: 2.2m"
      },
      {
        id: "eq-card-4",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
        title: "Mobility & Stretch Area",
        desc: "Elegant rubber-padded zone with alignment mats, foam rollers, and resistance systems.",
        specs: "Flooring: High-density TPE | Mats: Alignment TPE | Accessories: Bands, Rollers"
      }
    ],
    programs: [
      {
        id: "class-card-1",
        category: "strength",
        title: "Tone & Sculpt Blueprint",
        desc: "Target specific muscle groups to tone, sculpt, and build lean structural definition. Resistance bands and light weight stacks.",
        duration: "65 Mins",
        intensity: 3,
        img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
        blueprint: "Full body toning circuits, high rep structural movements, resistance bands integration, and core activation protocols."
      },
      {
        id: "class-card-2",
        category: "hiit",
        title: "Metabolic HIIT Burnout",
        desc: "Dynamic cardiovascular training to boost metabolic rate, burn calories, and build high-performance stamina.",
        duration: "40 Mins",
        intensity: 4,
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
        blueprint: "Rowing sprints, kettlebell swings, bodyweight circuits, plyometrics, and active recovery intervals."
      },
      {
        id: "class-card-3",
        category: "yoga",
        title: "Vinyasa Flow & Mobility",
        desc: "Enhance flexibility, core strength, and joint ranges. Ideal for active recovery, mindfulness, and alignment.",
        duration: "50 Mins",
        intensity: 2,
        img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
        blueprint: "Flowing yoga sequences, dynamic mobility stretches, breath control exercises, and structural alignment checks."
      },
      {
        id: "class-card-4",
        category: "boxing",
        title: "Kickboxing & Conditioning",
        desc: "Learn defensive kickboxing mechanics, pad work, and rapid core rotations in a high-energy environment.",
        duration: "60 Mins",
        intensity: 4,
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600",
        blueprint: "Kickboxing stance, heavy bag strikes, focus pad drills, speed intervals, and core rotation conditioning."
      },
      {
        id: "class-card-5",
        category: "strength",
        title: "Lower Body Sculpt & Glute Focus",
        desc: "Focus strictly on strengthening the lower body, glutes, and core using hip thrusters, cables, and bands.",
        duration: "55 Mins",
        intensity: 3,
        img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600",
        blueprint: "Glute isolation drills, hip thrust mechanics, cable kickbacks, deadlifts, and resistance band alignments."
      },
      {
        id: "class-card-6",
        category: "hiit",
        title: "Pilates & Core Sculpting",
        desc: "Low-impact core and abdominal strength training targeting stability, posture, and deep abdominal muscular tone.",
        duration: "45 Mins",
        intensity: 3,
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
        blueprint: "Core activation, postural alignments, mat pilates sequences, stability ball controls, and flexibility finishes."
      }
    ],
    memberships: [
      {
        name: "1 Month Plan",
        price: "1,000",
        period: "/Mo",
        features: ["Full studio access", "Premium imported equipment", "Luxury lockers & vanity area", "Female personal coach available", "Weekly progress scans"],
        popular: false
      },
      {
        name: "3 Months Plan",
        price: "2,500",
        period: "/3 Mo",
        features: ["Full studio access", "Premium imported equipment", "Luxury lockers & vanity area", "Female personal coach available", "Weekly progress scans"],
        popular: true
      },
      {
        name: "1 Year Plan",
        price: "8,000",
        period: "/Yr",
        features: ["Full studio access", "Premium imported equipment", "Luxury lockers & vanity area", "1-on-1 female coaching included", "Weekly progress scans"],
        popular: false
      }
    ],
    trainers: [
      {
        name: "Coach Priya",
        role: "Studio Director & Head Coach",
        desc: "Certified personal trainer with 6+ years experience specializing in female bodybuilding and conditioning.",
        photo: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Priya,%20I'm%20interested%20in%20Ladies%20Studio%20Coaching." }
      },
      {
        name: "Coach Ananya",
        role: "Pilates & Core Coach",
        desc: "Certified yoga and pilates instructor specializing in flexibility, postural alignment, and core toning.",
        photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Ananya,%20I'm%20interested%20in%20Pilates%20sessions." }
      },
      {
        name: "Coach Sunitha",
        role: "HIIT & Cardio Coach",
        desc: "High-energy athletic conditioning trainer focusing on ladies HIIT, fat burn, and metabolic pacing.",
        photo: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Sunitha,%20I'm%20interested%20in%20HIIT%20Classes." }
      }
    ],
    testimonials: [
      {
        author: "Pooja Sharma",
        text: "This new ladies studio is absolutely amazing! So premium, completely private, and the equipment is top notch. The trainers are very professional and supportive.",
        platform: "Google Review",
        rating: 5,
        avatar: "P",
        avatarClass: "avatar-blue"
      },
      {
        author: "Sneha Reddy",
        text: "Best fitness decision I have made. Beautiful interiors, extremely clean, and a very comfortable environment to workout in. Love the pilates and sculpt sessions!",
        platform: "Google Review",
        rating: 5,
        avatar: "S",
        avatarClass: "avatar-red"
      },
      {
        author: "Kavitha Viswanathan",
        text: "Highly recommend Daya Ladies Studio. The customized training from Coach Priya has helped me reach my targets. Absolute privacy and premium service.",
        platform: "Google Review",
        rating: 5,
        avatar: "K",
        avatarClass: "avatar-green"
      }
    ],
    transformations: [
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=600",
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=600",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600"
    ],
    locations: {
      activeId: "loc-ladies",
      branches: [
        {
          id: "loc-mens",
          name: "DAYA Fitness Gym (Men's & Unisex)",
          address: "D.No: 8-125/1, 1st Floor, Thota Garuvu, Arilova, Visakhapatnam, AP 530040 (Opp. Muthoot Mini Finance)",
          phone: "+91 90301 00350",
          timings: "Mon - Sat: 5:00 AM - 10:00 PM | Sunday: 6:00 AM - 12:00 PM",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3799.5675645405754!2d83.3192147!3d17.7650035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395dafc22f90a5%3A0xcb7a0a31d5f80da7!2sDaya%20Fitness%20Gym%20UNISEX%20GYM!5e0!3m2!1sen!2sin!4v1780641089909!5m2!1sen!2sin",
          whatsapp: "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20inquiring%20about%20the%20Men's%20Gym%20branch%20timings."
        },
        {
          id: "loc-ladies",
          name: "DAYA Fitness Ladies Studio",
          address: "Opp. Hill Residency, Arilova, Visakhapatnam, AP 530040",
          phone: "+91 90301 00350",
          timings: "Mon - Sat: 6:00 AM - 9:00 PM | Sunday: Closed",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.5381282051153!2d83.3156944!3d17.7663889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ1JzU5LjAiTiA4M8KwMTgnNTYuNSJF!5e0!3m2!1sen!2sin!4v1784106011314!5m2!1sen!2sin",
          whatsapp: "https://wa.me/919030100350?text=Hi%20Daya%20Fitness,%20I'm%20inquiring%20about%20the%20Ladies%20Studio%20branch%20timings."
        }
      ]
    },
    contact: {
      tag: "Exclusivity & Comfort",
      title: "BOOK YOUR VISIT",
      subtitle: "Experience absolute luxury fitness. Book a tour or send an inquiry below.",
      details: [
        { icon: "ph ph-phone", title: "Direct Contact", val: "+91 90301 00350" },
        { icon: "ph ph-map-pin", title: "Studio Location", val: "Opp. Hill Residency, Arilova, Visakhapatnam, AP 530040" },
        { icon: "ph ph-envelope", title: "Email Enquiries", val: "hello@dayafitness.com" }
      ]
    }
  }
};

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
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initScrollReveal() {
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.classList.remove('reveal-active');
    revealObserver.observe(el);
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

  // Hero Image Crossfade Toggle
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

  // 2. Why Choose (Bento)
  const chooseTag = document.getElementById('why-choose-tag');
  const chooseTitle = document.getElementById('why-choose-title');
  const chooseSubtitle = document.getElementById('why-choose-subtitle');
  if (chooseTag) chooseTag.innerText = data.whyChoose.tag;
  if (chooseTitle) chooseTitle.innerText = data.whyChoose.title;
  if (chooseSubtitle) chooseSubtitle.innerText = data.whyChoose.subtitle;

  data.whyChoose.cards.forEach((card, idx) => {
    const cardEl = document.getElementById(`bento-card-${idx + 1}`);
    const imgEl = document.getElementById(`bento-img-${idx + 1}`);
    const iconEl = document.getElementById(`bento-icon-${idx + 1}`);
    const titleEl = document.getElementById(`bento-title-${idx + 1}`);
    const descEl = document.getElementById(`bento-desc-${idx + 1}`);

    if (imgEl) imgEl.src = card.img;
    if (iconEl) iconEl.innerHTML = `<i class="${card.icon}"></i>`;
    if (titleEl) titleEl.innerText = card.title;
    if (descEl) descEl.innerText = card.desc;
  });

  // 3. Equipment Showcase
  const eqContainer = document.getElementById('equipment-container');
  if (eqContainer) {
    eqContainer.innerHTML = data.equipment.map(eq => `
      <div class="equipment-card" data-id="${eq.id}">
        <div class="equipment-img-wrapper">
          <img src="${eq.img}" alt="${eq.title}" class="equipment-img" loading="lazy">
        </div>
        <div class="equipment-content">
          <h3 class="equipment-title">${eq.title}</h3>
          <p class="equipment-desc">${eq.desc}</p>
        </div>
      </div>
    `).join('');

    // Re-bind equipment card clicks for Modal Spec triggers
    eqContainer.querySelectorAll('.equipment-card').forEach(card => {
      card.addEventListener('click', () => {
        const eqId = card.getAttribute('data-id');
        openEquipmentModal(theme, eqId);
      });
    });
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
              <a href="${headCoach.socials.instagram}" class="trainer-social-link" aria-label="Instagram"><i class="ph-fill ph-instagram-logo"></i></a>
            </div>
            <a href="#contact" class="btn btn-primary head-coach-cta" style="margin-top: 1.5rem;">Book Session with ${headCoach.name.replace('Coach ', '')}</a>
          </div>
          <div class="head-coach-right">
            <div class="head-coach-img-wrapper">
              <img src="${headCoach.photo}" alt="${headCoach.name}" class="head-coach-photo" loading="lazy">
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

  // 7. Success Stories (Transformations & Testimonials)
  const successTag = document.getElementById('success-tag');
  const successTitle = document.getElementById('success-title');
  const successSubtitle = document.getElementById('success-subtitle');
  if (successTag) successTag.innerText = theme === 'mens' ? 'Achievers Profile' : 'Empowered Members';
  if (successTitle) successTitle.innerText = theme === 'mens' ? 'SUCCESS STORIES' : 'MEMBER ACHIEVEMENTS';
  if (successSubtitle) successSubtitle.innerText = theme === 'mens'
    ? 'Real physical transformations and verified reviews from our Google Maps members.'
    : 'Real client feedback and transformations from our exclusive Arilova community.';

  const transformationsContainer = document.getElementById('transformations-container');
  if (transformationsContainer) {
    transformationsContainer.innerHTML = data.transformations.map(img => `
      <div class="transform-card">
        <img src="${img}" alt="Daya Transformation Profile" class="transform-img" loading="lazy">
      </div>
    `).join('');
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
              <svg viewBox="0 0 24 24" fill="#EA4335">
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
        <img src="${img}" alt="Daya Studio Gallery Grid" class="gallery-img" loading="lazy">
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
          <iframe src="${b.mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-label="${b.name} Google Map Location"></iframe>
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
        <img src="${p.img}" alt="${p.title}" class="program-img" loading="lazy">
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

  if (mImg) mImg.src = item.img;
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

  if (eqImg) eqImg.src = item.img;
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
    if (btnToggleMens) btnToggleMens.classList.add('active');
    if (btnToggleLadies) btnToggleLadies.classList.remove('active');
  } else {
    if (btnToggleMens) btnToggleMens.classList.remove('active');
    if (btnToggleLadies) btnToggleLadies.classList.add('active');
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
});

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
    }
  });
});

if (navToggle && navMenu) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    const toggleIcon = navToggle.querySelector('i');
    if (toggleIcon) {
      if (navMenu.classList.contains('active')) {
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
    if (btnToggleMens) btnToggleMens.classList.remove('active');
    if (btnToggleLadies) btnToggleLadies.classList.add('active');
  } else {
    currentTheme = 'mens';
    document.body.className = 'theme-mens';
    if (btnToggleMens) btnToggleMens.classList.add('active');
    if (btnToggleLadies) btnToggleLadies.classList.remove('active');
  }

  // Render content
  renderThemeContent(currentTheme);

  // Initialize Scroll Reveals
  setTimeout(initScrollReveal, 200);
});
