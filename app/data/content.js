export const person = {
  fullName: "Vikash Kalyani Sankararaman",
  shortName: "Vikash K S",
  email: "ksvikash2015@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vikash-k-s",
  github: "https://github.com/ksvikash",
  cvPath: "/sample-resume.pdf",
  location: "Zürich, CH",
  timezone: "GMT+1",
};

export const hero = {
  rotatingWords: ["Intelligent", "Efficient", "Edge"],
  subtitle: "MSc Electrical Engineering and Information Technology Student at ETH Zürich",
  stack: [
    "Python", "PyTorch", "TensorFlow", "C++", "C", "CUDA", "OpenCV",
    "ONNX", "Embedded Linux", "ESP-32", "Raspberry Pi", "Docker", "Git",
    "SystemVerilog", "CMake", "SQL",
  ],
};

export const about = {
  paragraphs: [
    {
      parts: [
        "I build ",
        { highlight: "intelligent systems" },
        " that span the full stack — from bare-metal firmware on ultra-low-power microcontrollers to deep learning pipelines for medical imaging. My work lives at the intersection of hardware constraints and algorithmic ambition.",
      ],
    },
    {
      parts: [
        "Currently pursuing my MSc at ",
        { highlight: "ETH Zürich" },
        ", focused on embedded AI, hardware acceleration, and distributed computing. Previously at Visteon, I optimized real-time in-vehicle infotainment systems shipped to production at Jaguar Land Rover.",
      ],
    },
  ],
  educationNote: "MSc Electrical Engineering & IT, ETH Zürich (2025–Present) · B.Tech ECE, VIT Chennai (2020–2024)",
};

export const education = [
  {
    institution: "ETH Zürich",
    degree: "M.Sc. Electrical Engineering & Information Technology",
    period: "2025 — Present",
    location: "Zürich, Switzerland",
    coursework: [
      "Principles of Distributed Computing",
      "System-on-Chip: Data Analytics & ML",
      "VLSI I & VLSI II",
      "Machine Learning for Microcontrollers",
      "Probabilistic AI",
    ],
    logo: "/logos/eth-logo.svg",
  },
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech. Electronics and Communication Engineering",
    period: "2020 — 2024",
    location: "Chennai, India",
    coursework: [
      "Neural Networks & Fuzzy Control",
      "Digital Signal Processing",
      "Embedded Systems",
      "Advanced Communication Systems",
    ],
    logo: "/logos/vit-logo.svg",
  },
];

export const experienceItems = [
  {
    date: "Sep 2026 — Present",
    role: "Teaching Assistant — Python for Engineers (P&S)",
    company: "ETH Zürich",
    tags: ["Python", "Jupyter", "Git", "Linux"],
  },
  {
    date: "Feb 2026 — May 2026",
    role: "Student Research Assistant",
    company: "ETH Zürich · Center for Project-Based Learning",
    tags: ["ALIF MCU", "TFLite", "C (bare-metal)", "Embedded CV"],
  },
  {
    date: "Aug 2024 — Jul 2025",
    role: "Software Engineer I",
    company: "Visteon Corporation",
    tags: ["C++", "C", "NVIDIA Jetson", "Real-time Systems"],
  },
  {
    date: "Jan 2024 — Jul 2024",
    role: "Software Engineer Intern",
    company: "Visteon Corporation",
    tags: ["C", "Raspberry Pi", "HIL Testing", "Embedded Linux"],
  },
  {
    date: "May 2023 — Jul 2023",
    role: "Software Engineering Intern",
    company: "ZF CVCS India Ltd.",
    tags: ["Python", "Simulation", "Test Automation"],
  },
];

export const skillGroups = [
  {
    label: "ML / Deep Learning",
    count: "07",
    items: ["PyTorch", "TensorFlow", "TFLite", "Keras", "OpenCV", "ONNX", "Knowledge Distillation"],
  },
  {
    label: "Edge & Systems",
    count: "08",
    items: ["Embedded Linux", "GAP9 (RISC-V)", "MAX78000", "ESP-32", "Raspberry Pi", "ALIF MCU", "Jetson Nano", "Arduino"],
  },
  {
    label: "Languages",
    count: "06",
    items: ["Python", "C++", "C", "SystemVerilog", "SQL", "CMake"],
  },
  {
    label: "Tooling",
    count: "05",
    items: ["Git", "Docker", "Linux", "Yosys", "OpenROAD"],
  },
];

export const projects = [
  {
    id: "ne16-deeploy",
    title: "NE16 Deeploy Integration & Benchmarking",
    meta: ["AI/ML", "Embedded"],
    metric: { value: "1.48×", label: "throughput after compiler fix" },
    shortDescription:
      "Benchmarked a PyTorch-to-bare-metal compilation flow on the GAP9 RISC-V accelerator, tracing and eliminating a compiler-level memory-layout bottleneck.",
    expanded:
      "Benchmarked kernel and full-model performance on GAP9 through Deeploy, an ML compiler that compiles PyTorch models to bare-metal C for a hardware accelerator. Traced a throughput bottleneck to a redundant memory-layout transform repeated across nearly every layer and rewrote the compiler pass to fold it out, increasing throughput by 1.48×. Characterized where the NE16 datapath saturates across channel counts and feature-map sizes, showing that throughput only improves meaningfully from 16 channels onward.",
    tags: ["PyTorch", "Deeploy", "GAP9 (RISC-V)", "NE16", "Bare-metal C"],
    link: { type: "github", url: "https://github.com/ksvikash" },
  },
  {
    id: "fir-filter-croc",
    title: "FIR Filter Hardware Accelerator for Croc SoC",
    meta: ["Hardware", "Digital Design"],
    metric: { value: "90.5×", label: "speedup over software (8-MAC)" },
    shortDescription:
      "Parameterizable 32-tap FIR filter accelerator for the Croc SoC, taken through full digital implementation flow to GDS-ready closure at 80 MHz.",
    expanded:
      "Designed a parameterizable 32-tap FIR filter accelerator (1–16 MAC units) for the Croc SoC in SystemVerilog, connecting it over the OBI interconnect and using a FIFO-decoupled writeback path to overlap compute with memory access. Compared cycle count, area, and power across 5 MAC configurations and identified 8 MACs as the Pareto-optimal design, achieving a 90.5× speedup over a software implementation. Carried the design through synthesis, place-and-route, and DRC/LVS closure at 80 MHz on the IHP SG13G2 process using Yosys and OpenROAD. Verified functional correctness against a Python golden model across signal lengths from 36 to 540 samples.",
    tags: ["SystemVerilog", "Yosys", "OpenROAD", "OBI", "ASIC Flow"],
    link: { type: "github", url: "https://github.com/ksvikash" },
  },
  {
    id: "semantic-world-models",
    title: "Universal Semantic World Models",
    meta: ["Research", "3D Vision"],
    metric: { value: "+3.5", label: "mIoU improvement (mask-guided)" },
    shortDescription:
      "Multi-view semantic fusion pipeline lifting DINOv3 features onto 3D reconstructions for open-vocabulary scene queries, in collaboration with Google.",
    expanded:
      "Built a multi-view semantic fusion pipeline in Python that lifts DINOv3 features onto reconstructed 3D points and aggregates them with SLERP, enabling open-vocabulary 3D scene queries without retraining. Defined 'cosine dispersion' to measure cross-view semantic flickering, then compared averaging, weighted SLERP, and mask-guided SLERP fusion using PyTorch and VGGT. Found that mask-guided fusion improved segmentation mIoU by 3.5 points (from 51.5 to 55.0) over simple averaging on 50k Replica points, at the cost of lower accuracy on small object classes. Collaboration with Google and Magic Leap.",
    tags: ["Python", "PyTorch", "DINOv3", "VGGT", "SLERP", "3D Reconstruction"],
    link: { type: "github", url: "https://github.com/ksvikash" },
  },
  {
    id: "kws-mcu",
    title: "Real-Time Keyword Spotting on Low-Power MCUs",
    meta: ["Embedded ML", "Edge AI"],
    metric: { value: "0.77ms", label: "inference latency on GAP9" },
    shortDescription:
      "Hardware-aware neural networks for keyword spotting achieving 92.5% accuracy at sub-millisecond latency on GAP9, with 3.4× better memory efficiency.",
    expanded:
      "Designed a hardware-aware neural network in PyTorch and TensorFlow achieving 92.5% accuracy at 0.77 ms latency on GAP9's accelerator, with 3.4× better memory efficiency than prior work. Deployed a knowledge-distilled version in C on MAX78000 at 89.08% accuracy, 123 KB model size, and 2.01 ms inference time, trading a small accuracy loss for a much smaller, faster deployment suitable for always-on keyword spotting.",
    tags: ["PyTorch", "TensorFlow", "C", "GAP9", "MAX78000", "Knowledge Distillation"],
    link: { type: "github", url: "https://github.com/ksvikash" },
  },
  {
    id: "lung-tumor-segmentation",
    title: "Volumetric Lung Tumor Segmentation",
    meta: ["AI/ML", "Healthcare"],
    metric: { value: "72.9%", label: "Dice score (academic)" },
    shortDescription:
      "3D U-Net architecture for semantic segmentation of lung tumors from CT scans, achieving a validation Dice score of 0.729. Academic research prototype.",
    expanded:
      "Developed a deep learning model using a 3D U-Net architecture for semantic segmentation of lung tumors from 3D CT scans. Preprocessed and augmented a 3D lung CT dataset, applying rotation, scaling, and normalization to improve model robustness. Achieved a validation Dice score of 0.729 (72.9%) for tumor segmentation on the evaluation set. This is an academic research project, not clinically validated or intended for clinical use.",
    tags: ["Python", "PyTorch", "TensorFlow", "U-Net", "3D CT Imaging"],
    link: { type: "report", url: "#" },
  },
  {
    id: "acl-tear-detection",
    title: "ACL Tear Detection in Knee MRI",
    meta: ["AI/ML", "Healthcare"],
    metric: { value: "88%", label: "balanced accuracy (academic)" },
    shortDescription:
      "Shallow 3D CNN for binary classification of ACL tears from knee MRI scans on the Stanford MRNet dataset. Academic research prototype.",
    expanded:
      "Developed a shallow 3D convolutional neural network (CNN) for binary classification of ACL tears from knee MRI scans using the Stanford MRNet dataset (1,370 exams). Leveraged 3D volumetric MRI data to capture spatial relationships across sagittal, coronal, and axial planes for more context-aware classification. Achieved a balanced accuracy of 88% in distinguishing ACL tear vs. no-tear cases on the test set. Compared the shallow 3D CNN against deeper architectures (VGG16, Xception, ResNet50) and demonstrated competitive performance with lower computational complexity. Academic project, not clinically validated.",
    tags: ["Python", "3D CNN", "TensorFlow/Keras", "MRNet", "Medical Imaging"],
    link: { type: "github", url: "https://github.com/ksvikash" },
  },
  {
    id: "road-defect-detection",
    title: "IoT Road Defect Detection — Edge Perception",
    meta: ["IoT", "Computer Vision"],
    metric: { value: "40%", label: "memory reduction via quantization" },
    shortDescription:
      "Real-time road defect detection using modified VGG-16 on ESP-32, with 40% memory reduction and automated Telegram-based alerting.",
    expanded:
      "Deployed a modified VGG-16 crack segmentation model in PyTorch on an ESP-32-based system, achieving a 30% accuracy improvement over the baseline for real-time road defect perception from an embedded camera node. Reduced model memory usage by 40% via quantization and pruning to meet microcontroller constraints. Automated detection alerts via a Telegram bot for remote monitoring, using OpenCV and Raspberry Pi for image capture and preprocessing.",
    tags: ["PyTorch", "VGG-16", "ESP-32", "Raspberry Pi", "OpenCV", "Telegram Bot"],
    link: { type: "report", url: "#" },
  },
];

export const publications = [
  {
    type: "IEEE Conference Paper",
    award: "★ Best Paper Award",
    venue: "IConSCEPT 2023",
    year: "2023",
    title: "An Approach to Generation of Sentences Using Sign Language Detection",
    authors: "K S Vikash et al.",
    abstract:
      "An end-to-end pipeline using SSD MobileNetV2 and OpenCV that translates sign language gestures into fluid sentences in real-time, achieving 96% detection accuracy. Recipient of the Best Paper Award at IConSCEPT 2023.",
    link: "https://ieeexplore.ieee.org/",
  },
];

export const leadership = [
  {
    role: "Events Committee Member",
    org: "ETH Entrepreneur Club",
    period: "Feb 2026 — Present",
    description: "Leading the Startup & Investor Tour with SICTIC, Synthara AG, and Voliro AG. Currently planning a Startup Speed Dating Event connecting student founders with potential collaborators.",
    monogram: "EC",
  },
  {
    role: "IT Committee Member",
    org: "ETH Entrepreneur Club",
    period: "Sep 2025 — Jan 2026",
    description: "Built backend workflows for member onboarding automation, Google OAuth authentication, and event/member data analytics pipelines using Python and SQLAlchemy.",
    monogram: "EC",
  },
  {
    role: "Vice Chairperson",
    org: "IEEE Student Branch, VIT Chennai",
    period: "Aug 2022 — Aug 2023",
    description: "Led a team of 50+ members with 6 department heads, organizing 5 major technical events. Secured IEEE funding of Rs. 30,000+ and represented VIT Chennai at the IEEE Madras Section.",
    monogram: "IEEE",
  },
  {
    role: "Overall Coordinator / Head",
    org: "TechnoVIT'22, VIT Chennai",
    period: "Jun 2022 — Nov 2022",
    description: "Led 500+ students across 15+ committees and 10 departments. Facilitated 200+ events spanning AI, sustainability, and broader technical themes.",
    monogram: "TV",
  },
];
