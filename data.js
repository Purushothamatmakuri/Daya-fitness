// ==========================================================================
// DAYA FITNESS CENTRALIZED CONFIGURATION DATABASE (OPTIMIZED WEBP PATHS)
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
          img: "images/strength_training.webp",
          icon: "ph-bold ph-barbell",
          title: "Conditioning",
          desc: "High-intensity athletic conditioning programs designed to shock your system, spike metabolism, and forge an unbreakable cardiovascular engine."
        },
        {
          img: "images/personal_training.webp",
          icon: "ph-bold ph-user-focus",
          title: "Coaching",
          desc: "One-on-one professional guidance directly from Head Coach P. Sathish. Customized programming, strict technique checks, and nutritional blueprints."
        },
        {
          img: "images/cardio_hiit.webp",
          icon: "ph-bold ph-heartbeat",
          title: "Cardio Zone",
          desc: "State-of-the-art conditioning zone with top-tier treadmills and spin cycles to expand lung capacity and accelerate fat loss."
        },
        {
          img: "images/zumba_yoga.webp",
          icon: "ph-bold ph-users-three",
          title: "Community",
          desc: "Join a high-discipline, high-intensity training community that keeps you motivated, consistent, and accountable daily."
        }
      ]
    },
    equipment: [
      {
        id: "eq-card-1",
        img: "images/Strength.webp",
        title: "Specialized Strength Stacks",
        desc: "Selectorized plate-loaded machines built to isolate and optimize resistance arcs.",
        specs: "Brand: Jerai Fitness / Being Strong | Stack Load: 100kg Max | Adjustable Angles: 6 Positions"
      },
      {
        id: "eq-card-2",
        img: "images/cardio.webp",
        title: "Premium Cardio Platforms",
        desc: "High-performance treadmills, spin cycles, and commercial air rowers.",
        specs: "Brand: Life Fitness | Interactive Monitor: Included | Max Speed: 22 km/h"
      },
      {
        id: "eq-card-3",
        img: "images/Free_weights.webp",
        title: "Dedicated Free Weights",
        desc: "Rubber dumbbells up to 40kg, Olympic bars, and deadlift platforms.",
        specs: "Dumbbell Stack: 2.5kg - 40kg | Barbells: Olympic Grade | High-density rubberized"
      },
      {
        id: "eq-card-4",
        img: "images/Dumbell.webp",
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
        img: "images/strength_training.webp",
        blueprint: "Squat, Bench Press, Deadlift mechanics, leverage adjustment, structural stability, and peak force output under strict supervision."
      },
      {
        id: "class-card-2",
        category: "hiit",
        title: "High-Intensity Cardio Conditioning",
        desc: "A rapid metabolic conditioning split designed to maximize VO2 max and burn body fat. Kettlebells and metabolic drills.",
        duration: "45 Mins",
        intensity: 5,
        img: "images/cardio_hiit.webp",
        blueprint: "Rowing intervals, air bike pacing, kettlebell circuits, high-frequency bodyweight drills in structured target intervals."
      },
      {
        id: "class-card-3",
        category: "yoga",
        title: "Flexibility & Mobility Yoga",
        desc: "Structured joint mobility and active recovery sequences. Perfect for active recovery, mindfulness, and structural alignment.",
        duration: "50 Mins",
        intensity: 2,
        img: "images/zumba_yoga.webp",
        blueprint: "Range of motion expansion, muscular flexibility improvements, spinal alignment checks, and systemic soreness reduction."
      },
      {
        id: "class-card-4",
        category: "boxing",
        title: "Fighter Boxing Conditioning",
        desc: "Train like a competitive fighter. Heavy bag work, striking drills, structural movement, rapid footwork, and core rotations.",
        duration: "60 Mins",
        intensity: 4,
        img: "images/fat_loss.webp",
        blueprint: "Boxing mechanics, heavy bag combinations, pad work drills, cardiovascular spikes, and core rotations."
      },
      {
        id: "class-card-5",
        category: "strength",
        title: "Muscle Building & Hypertrophy",
        desc: "Hypertrophy-focused training splits mapping direct volume blocks. Target specific muscle groups to stimulate dense growth.",
        duration: "50 Mins",
        intensity: 3,
        img: "images/personal_training.webp",
        blueprint: "Volume-based training targeting localized muscle groups, strict mechanical tempo control, and progressive overload tracking."
      },
      {
        id: "class-card-6",
        category: "hiit",
        title: "Core & Abs Interval Burn",
        desc: "High-speed abdominal intervals designed to shred body fat while building deep dynamic core stability and stamina.",
        duration: "30 Mins",
        intensity: 4,
        img: "images/weight_gain.webp",
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
        photo: "images/Trainer.webp",
        socials: { instagram: "https://www.instagram.com/daya_fitnessgym?igsh=MXN6d3gxZ2pqODhieg==", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Sathish,%20I'm%20interested%20in%20Men's%20Gym%20Personal%20Training." }
      },
      {
        name: "Coach Ramji",
        role: "Assistant Trainer",
        desc: "Certified strength coach specializing in hypertrophy training splits and compound bar mechanics.",
        photo: "images/trainer_ramji.webp",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Ramji,%20I'm%20interested%20in%20Strength%20Training." }
      },
      {
        name: "Coach Abhi",
        role: "Conditioning Specialist",
        desc: "HIIT and boxing performance trainer focusing on fat loss and cardiovascular output.",
        photo: "images/trainer_abhi.webp",
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
      "images/transform_sathish_2.webp",
      "images/transform_sathish_1.webp",
      "images/transform_sathish_3.webp",
      "images/transform_sathish_4.webp"
    ],
    gallery: [
      "images/Strength.webp",
      "images/cardio.webp",
      "images/Free_weights.webp",
      "images/Dumbell.webp",
      "images/Zumba_yoga.webp",
      "images/Strength.webp"
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
          img: "images/ladies_sculpt.webp",
          icon: "ph-bold ph-sparkles",
          title: "Luxury Space",
          desc: "Enjoy an exclusive, premium, ladies-only workout studio featuring customized warm lighting and imported elite machinery designed for your privacy and style."
        },
        {
          img: "images/ladies_coaching.webp",
          icon: "ph-bold ph-crown",
          title: "Elite Coaching",
          desc: "Receive bespoke guidance from our certified female trainers. Get customized workout splits, mobility programs, and personal accountability sessions."
        },
        {
          img: "images/ladies_cardio.webp",
          icon: "ph-bold ph-trend-up",
          title: "Cardio & Sculpt",
          desc: "Sculpt your physique in our dedicated premium cardio zone, featuring imported stairmasters, treadmills, and high-frequency mobility alignment equipment."
        },
        {
          img: "images/ladies_privacy.webp",
          icon: "ph-bold ph-shield-check",
          title: "Privacy & Comfort",
          desc: "Work out with absolute comfort, security, and premium style in a supportive environment tailored specifically to motivate women."
        }
      ]
    },
    equipment: [
      {
        id: "eq-card-1",
        img: "images/ladies_equip_cardio.webp",
        title: "Premium Imported Cardio",
        desc: "Luxurious commercial treadmills and stairmasters programmed with custom training routines.",
        specs: "Brand: Technogym | Touch Console: 15.6\" HD | Real-time Heart Rate: Included"
      },
      {
        id: "eq-card-2",
        img: "images/ladies_equip_smith.webp",
        title: "Linear Smith Machine",
        desc: "Ultra-smooth counter-balanced smith machine for safe, isolated squatting and pressing.",
        specs: "Brand: Technogym | Bar weight: 5kg starting | Safety stops: 12 lock positions"
      },
      {
        id: "eq-card-3",
        img: "images/ladies_equip_cable.webp",
        title: "Functional Cable Trainers",
        desc: "Versatile double cable crossover systems with premium handles for full-body sculpting.",
        specs: "Brand: Life Fitness | Pull Ratio: 1:2 | Cable Travel: 2.2m"
      },
      {
        id: "eq-card-4",
        img: "images/ladies_cardio.webp",
        title: "Mobility & Stretch Area",
        desc: "Elegant rubber-padded zone with alignment mats, foam rollers, and resistance systems.",
        specs: "Flooring: High-density TPE | Mats: Alignment TPE | Accessories: Bands, Rollers"
      }
    ],
    studioGallery: [
      {
        id: "lg-card-1",
        type: "image",
        src: "images/ladies_gallery1.jpeg",
        title: "Luxury Studio Interior",
        desc: "Exclusive, modern ladies-only training environment with premium lighting and design."
      },
      {
        id: "lg-card-2",
        type: "image",
        src: "images/ladies_gallery2.jpeg",
        title: "Bespoke Fitness Suite",
        desc: "Fully equipped workout area tailored for strength, sculpt, and high-energy conditioning."
      },
      {
        id: "lg-card-3",
        type: "image",
        src: "images/ladies_gallery3.jpeg",
        title: "Private Sculpting Zone",
        desc: "Dedicated personal training space offering absolute privacy and comfort."
      },
      {
        id: "lg-card-4",
        type: "video",
        src: "images/ladies_galleryvid.mp4",
        title: "Studio Tour Video",
        desc: "Take a full video walkthrough of our Daya Ladies Studio facility."
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
        img: "images/ladies_sculpt.webp",
        blueprint: "Full body toning circuits, high rep structural movements, resistance bands integration, and core activation protocols."
      },
      {
        id: "class-card-2",
        category: "hiit",
        title: "Metabolic HIIT Burnout",
        desc: "Dynamic cardiovascular training to boost metabolic rate, burn calories, and build high-performance stamina.",
        duration: "40 Mins",
        intensity: 4,
        img: "images/ladies_cardio.webp",
        blueprint: "Rowing sprints, kettlebell swings, bodyweight circuits, plyometrics, and active recovery intervals."
      },
      {
        id: "class-card-3",
        category: "yoga",
        title: "Vinyasa Flow & Mobility",
        desc: "Enhance flexibility, core strength, and joint ranges. Ideal for active recovery, mindfulness, and alignment.",
        duration: "50 Mins",
        intensity: 2,
        img: "images/ladies_yoga.webp",
        blueprint: "Flowing yoga sequences, dynamic mobility stretches, breath control exercises, and structural alignment checks."
      },
      {
        id: "class-card-4",
        category: "boxing",
        title: "Kickboxing & Conditioning",
        desc: "Learn defensive kickboxing mechanics, pad work, and rapid core rotations in a high-energy environment.",
        duration: "60 Mins",
        intensity: 4,
        img: "images/ladies_equip_smith.webp",
        blueprint: "Kickboxing stance, heavy bag strikes, focus pad drills, speed intervals, and core rotation conditioning."
      },
      {
        id: "class-card-5",
        category: "strength",
        title: "Lower Body Sculpt & Glute Focus",
        desc: "Focus strictly on strengthening the lower body, glutes, and core using hip thrusters, cables, and bands.",
        duration: "55 Mins",
        intensity: 3,
        img: "images/ladies_equip_cardio.webp",
        blueprint: "Glute isolation drills, hip thrust mechanics, cable kickbacks, deadlifts, and resistance band alignments."
      },
      {
        id: "class-card-6",
        category: "hiit",
        title: "Pilates & Core Sculpting",
        desc: "Low-impact core and abdominal strength training targeting stability, posture, and deep abdominal muscular tone.",
        duration: "45 Mins",
        intensity: 3,
        img: "images/ladies_cardio.webp",
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
        photo: "images/ladies_coaching.webp",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Priya,%20I'm%20interested%20in%20Ladies%20Studio%20Coaching." }
      },
      {
        name: "Coach Ananya",
        role: "Pilates & Core Coach",
        desc: "Certified yoga and pilates instructor specializing in flexibility, postural alignment, and core toning.",
        photo: "images/ladies_trainer_ananya.webp",
        socials: { instagram: "#", whatsapp: "https://wa.me/919030100350?text=Hi%20Coach%20Ananya,%20I'm%20interested%20in%20Pilates%20sessions." }
      },
      {
        name: "Coach Sunitha",
        role: "HIIT & Cardio Coach",
        desc: "High-energy athletic conditioning trainer focusing on ladies HIIT, fat burn, and metabolic pacing.",
        photo: "images/ladies_trainer_sunitha.webp",
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
      "images/ladies_privacy.webp",
      "images/ladies_trainer_sunitha.webp",
      "images/ladies_sculpt.webp",
      "images/ladies_yoga.webp"
    ],
    gallery: [
      "images/ladies_gallery1.jpeg",
      "images/ladies_gallery2.jpeg",
      "images/ladies_gallery3.jpeg"
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
