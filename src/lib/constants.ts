export const BUSINESS = {
  name: "Strategic Diesel and Auto Repair",
  shortName: "Strategic Diesel",
  phone: "(435) 789-0134",
  phoneLink: "tel:+14357890134",
  address: "644 S 1500 W, Vernal, UT",
  streetAddress: "644 S 1500 W",
  city: "Vernal",
  state: "UT",
  zip: "84078",
  email: "info@strategicdieselandauto.com", // TODO: Replace with real email
  hours: {
    weekdays: "Monday–Friday: 8:00 AM – 6:00 PM",
    weekend: "Saturday & Sunday: Closed",
  },
  hoursStructured: "Mo-Fr 08:00-18:00",
  facebook:
    "https://www.facebook.com/p/Strategic-Diesel-and-Auto-Repair-100090889135686/",
  instagram: "#", // TODO: Update when Instagram is available
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Strategic+Diesel+and+Auto+Repair+644+S+1500+W+Vernal+UT",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d-109.55!3d40.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzAwLjAiTiAxMDnCsDMzJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1",
  url: "https://www.strategicdieselandauto.com",
  logo: "/images/logo.jpg",
  tagline: "Vernal's Trusted Diesel & Auto Repair",
  businessId: 55,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "diesel-engine",
    title: "Diesel Engine Repair & Service",
    shortDescription:
      "Complete diesel engine diagnostics, repair, and maintenance for trucks and heavy equipment.",
    description:
      "Our ASE-trained technicians specialize in diesel engine repair for all makes and models. From routine maintenance to complex engine rebuilds, we keep your diesel running strong and efficient. We understand that downtime costs you money — that's why we work to get your vehicle back on the road as fast as possible.",
    subServices: [
      "Engine diagnostics & troubleshooting",
      "Turbocharger repair & replacement",
      "Fuel injection system service",
      "DPF cleaning & replacement",
      "EGR valve service & repair",
      "Diesel oil changes & filter service",
    ],
    icon: "engine",
  },
  {
    id: "general-auto",
    title: "General Auto Repair",
    shortDescription:
      "Bumper-to-bumper auto repair for cars, trucks, and SUVs of all makes and models.",
    description:
      "Whether it's a routine fix or a major repair, our team handles it all. We service all makes and models with the same attention to detail and commitment to quality that our customers have come to expect. No job is too big or too small.",
    subServices: [
      "Engine repair & overhaul",
      "Cooling system service",
      "Belts & hoses replacement",
      "Exhaust system repair",
      "Steering & suspension",
      "Drivetrain service",
    ],
    icon: "wrench",
  },
  {
    id: "brakes",
    title: "Brake Service",
    shortDescription:
      "Expert brake inspection, repair, and replacement to keep you safe on the road.",
    description:
      "Your brakes are your vehicle's most important safety feature. Our experienced technicians provide thorough brake inspections and reliable repair services using quality parts. We'll make sure you can stop with confidence every time.",
    subServices: [
      "Brake pad & shoe replacement",
      "Rotor resurfacing & replacement",
      "Brake fluid flush",
      "ABS diagnostics & repair",
      "Brake line inspection & repair",
      "Emergency brake service",
    ],
    icon: "brake",
  },
  {
    id: "transmission",
    title: "Transmission Service",
    shortDescription:
      "Transmission diagnostics, repair, and rebuilds for smooth, reliable shifting.",
    description:
      "Transmission problems can leave you stranded. Whether your vehicle needs a simple fluid change or a complete transmission rebuild, we have the experience and equipment to get the job done right. We work on both automatic and manual transmissions.",
    subServices: [
      "Transmission fluid change & flush",
      "Computer diagnostics",
      "Clutch repair & replacement",
      "Transmission rebuild services",
      "Torque converter service",
      "Transfer case repair",
    ],
    icon: "transmission",
  },
  {
    id: "electrical",
    title: "Electrical & Diagnostics",
    shortDescription:
      "Advanced computer diagnostics and electrical system repair for modern vehicles.",
    description:
      "Today's vehicles rely on complex electrical systems and onboard computers. Our shop is equipped with the latest diagnostic tools to accurately identify issues and get them fixed. From a simple check engine light to complex wiring problems, we've got you covered.",
    subServices: [
      "Check engine light diagnosis",
      "Electrical system troubleshooting",
      "Battery testing & replacement",
      "Starter & alternator repair",
      "Wiring harness repair",
      "Sensor replacement & calibration",
    ],
    icon: "diagnostic",
  },
  {
    id: "maintenance",
    title: "Preventive Maintenance",
    shortDescription:
      "Scheduled maintenance services to prevent costly breakdowns and extend vehicle life.",
    description:
      "The best repair is the one you never need. Regular preventive maintenance keeps your vehicle running reliably, saves you money on costly repairs, and extends the life of your car or truck. We'll help you stay on schedule with manufacturer-recommended service intervals.",
    subServices: [
      "Oil changes (conventional & synthetic)",
      "Tire rotations & balancing",
      "Fluid level checks & top-offs",
      "Multi-point vehicle inspections",
      "Tune-ups & spark plug replacement",
      "Air & cabin filter replacement",
    ],
    icon: "maintenance",
  },
  {
    id: "fleet",
    title: "Fleet Services",
    shortDescription:
      "Customized maintenance programs for commercial and fleet vehicles.",
    description:
      "We understand that fleet downtime directly impacts your bottom line. Strategic Diesel and Auto Repair offers customized maintenance programs designed to keep your commercial vehicles on the road. We work with businesses throughout the Uintah Basin to provide reliable, efficient fleet service.",
    subServices: [
      "Scheduled fleet maintenance programs",
      "Priority scheduling for fleet vehicles",
      "Detailed service records & reporting",
      "DOT inspection preparation",
      "Preventive maintenance planning",
      "Multi-vehicle discount programs",
    ],
    icon: "fleet",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Mike R.",
    rating: 5,
    date: "March 2026",
    text: "Best diesel shop in the Basin, hands down. They diagnosed a fuel injection issue on my Duramax that two other shops couldn't figure out. Fair price and had it done in two days. Highly recommend.",
    vehicle: "2019 Chevy Silverado 3500HD",
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    date: "February 2026",
    text: "Took my Jeep in for a brake job and they were upfront about everything — showed me exactly what was worn and what still had life. No upselling, just honest work. Will definitely be back.",
    vehicle: "2021 Jeep Grand Cherokee",
  },
  {
    id: 3,
    name: "Travis W.",
    rating: 5,
    date: "January 2026",
    text: "These guys saved me a tow bill. My truck started running rough on the highway and I limped it into their shop. They fit me in the same day and had it running like new by the afternoon. Can't say enough good things.",
    vehicle: "2017 Ford F-350",
  },
  {
    id: 4,
    name: "Jessica M.",
    rating: 5,
    date: "December 2025",
    text: "I'm not a car person at all, and the team here was so patient explaining what was going on with my car. They didn't try to push unnecessary repairs and the price was exactly what they quoted. Found my go-to shop.",
    vehicle: "2020 Toyota Camry",
  },
  {
    id: 5,
    name: "Dan K.",
    rating: 5,
    date: "November 2025",
    text: "Run a small fleet of work trucks and these guys keep every one of them on the road. They know diesel inside and out. The fleet maintenance program has saved us thousands in the long run.",
    vehicle: "Fleet of Ram 2500s",
  },
  {
    id: 6,
    name: "Cody L.",
    rating: 4,
    date: "October 2025",
    text: "Solid work on my transmission flush and engine tune-up. Turnaround was quick and the truck feels like it's got new life. Only reason for 4 stars is the wait for parts, but that's not their fault.",
    vehicle: "2016 GMC Sierra 2500HD",
  },
  {
    id: 7,
    name: "Amanda B.",
    rating: 5,
    date: "September 2025",
    text: "Had an electrical gremlin that was driving me crazy — dashboard lights flickering, random warnings. They tracked it down to a corroded ground wire and fixed it for a fraction of what I expected to pay. Honest shop.",
    vehicle: "2018 Ford Explorer",
  },
  {
    id: 8,
    name: "Ryan P.",
    rating: 5,
    date: "August 2025",
    text: "Brought my Cummins in for a DPF delete and EGR service. They explained all my options clearly and did exactly what we agreed on. Truck runs better than it has in years. These guys know their stuff.",
    vehicle: "2015 Ram 3500",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Owner", // TODO: Replace with actual owner name
    role: "Owner & Lead Technician",
    bio: "With over 15 years of experience in diesel and automotive repair, our founder built Strategic Diesel and Auto Repair on a simple promise: honest work at a fair price. A lifelong Vernal resident, he's committed to keeping the Uintah Basin's vehicles running strong.",
  },
  {
    name: "Lead Mechanic", // TODO: Replace with actual name
    role: "Senior Diesel Technician",
    bio: "Specializing in diesel engine diagnostics and turbo systems, our senior tech brings a decade of hands-on experience to every job. ASE-certified and factory-trained, he handles the toughest diesel problems with confidence.",
  },
  {
    name: "Service Advisor", // TODO: Replace with actual name
    role: "Service Advisor",
    bio: "Our service advisor is your first point of contact and the bridge between you and our technicians. With a knack for clear communication and a commitment to customer satisfaction, they make sure you understand every step of the repair process.",
  },
];

export const TRUST_STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Vehicles Serviced" },
  { value: "ASE", label: "Certified Technicians" },
  { value: "100%", label: "Locally Owned" },
];

export const SERVICE_OPTIONS = [
  "Diesel Repair",
  "General Auto Repair",
  "Brakes",
  "Transmission",
  "Electrical & Diagnostics",
  "Preventive Maintenance",
  "Fleet Services",
  "Other",
];
