export const person = {
  fullName: "Vikash Kalyani Sankararaman",
  email: "ksvikash2015@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vikash-k-s/",
  github: "https://github.com/ksvikash",
  cvPath: "/sample-resume.pdf",
};

export const hero = {
  rotatingWords: ["Intelligent", "Efficient", "Edge"],
  subtitle: "Student at ETH Zurich",
};

export const about = {
  paragraphs: [
    {
      parts: [
        "I am an AI/ML engineer and researcher based in Zurich, specializing in the architecture of ",
        { highlight: "intelligent systems" },
        " that bridge the gap between complex signal processing and human-centered software design.",
      ],
    },
    {
      parts: [
        "In my work, every model is a ",
        { highlight: "deliberate choice" },
        ", and every system is a conversation between raw data and elegant execution. I believe that thoughtful engineering is the key to solving the world’s most nuanced technical challenges.",
      ],
    },
  ],
  educationNote: "Education: B.Tech ECE, VIT Chennai.",
};

export const experienceItems = [
  {
    date: "2025 — Present",
    role: "MSc Electrical Engineering & IT at ETH Zürich",
  },
  {
    date: "2024 — 2025",
    role: "Software Engineer I at Visteon Corporation",
  },
  {
    date: "2024 — 2024",
    role: "Software Engineer Intern at Visteon Corporation",
  },
];

export const projects = [
  {
    id: "lung-tumour-segmentation",
    title: "Lung Tumour Segmentation",
    meta: ["AI/ML", "Healthcare"],
    shortDescription:
      "A 3D Volumetric U-Net architecture achieving 72.9% Dice score for precise oncology diagnostics.",
    expanded:
      "Engineered a 7-layer CNN using TensorFlow to automate 3D segmentation in CT scans. Fine-tuned optimization parameters to achieve a 29% increase in accuracy, directly impacting the speed of clinical data analysis.",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "3D medical imaging and healthcare technology",
  },
  {
    id: "road-maintenance-system",
    title: "Road Maintenance System",
    meta: ["IoT", "Computer Vision"],
    shortDescription:
      "Real-time road defect detection using optimized VGG-16 on resource-constrained edge devices.",
    expanded:
      "Deployment of a modified VGG-16 on an ESP-32/Raspberry Pi stack. Achieved a 40% reduction in memory footprint while maintaining high precision, featuring a custom Telegram-integrated alert system for infrastructure monitoring.",
    imageSrc:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Smart city and connected infrastructure",
  },
  {
    id: "sign-language-translation",
    title: "Sign Language Translation",
    meta: ["Research", "Deep Learning"],
    shortDescription:
      "Award-winning research on sentence generation via SSD MobileNetV2 with 96% detection accuracy.",
    expanded:
      "Published in IEEE and recipient of the Best Paper Award at IConSCEPT’23. Developed a robust end-to-end pipeline using OpenCV and TensorFlow that translates sign language gestures into fluid sentences in real-time.",
    imageSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Deep learning and neural network visualization",
  },
];
