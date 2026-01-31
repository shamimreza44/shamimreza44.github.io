export const siteConfig = {
  name: "Shamim Reza",
  title: "Student & PC Enthusiast",
  description: "Portfolio website of Shamim Reza",
  accentColor: "#FF7444",
  social: {
    email: "shamim44@student.sust.edu",
    linkedin: "https://linkedin.com/in/shamimreza44",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/shamimreza44",
  },
  aboutMe:
    "A research-oriented Electrical and Electronic Engineering undergraduate and a published author specializing in perovskite solar cell modeling, numerical simulation, and renewable energy systems. Aspiring PhD candidate focused on applied semiconductor physics and next-generation sustainable energy technologies.",
  skills: [
    {
      name: "Programming & Computation",
      skills: ["C / C++", "Fortran", "R", "MATLAB", "Python", "Bash scripting", "HTML / CSS / TypeScript"],
    },
    {
      name: "Research & Academics",
      skills: ["Peer-reviewed journal and conference publication", "Scientific writing and documentation", "Literature review and comparative analysis", "Reproducible computational research", "Interdisciplinary research (energy–ML–space systems)"],
    },
    {
      name: "Simulation & ML Tools",
      skills: ["SCAPS-1D", "Lumerical FDTD", "TensorFlow / Keras", "Scikit-learn", "Software Defined Radio (SDR) tools", "Librosa, PyAudio", "OpenCV", "NumPy, Matplotlib"],
    },
    {
      name: "Development Infrastructure",
      skills: ["Linux / Raspbian environments", "Git version control", "Docker", "Google Cloud Platform (GCP)", "VS Code, PyCharm, Eclipse, Visual Studio", "Database integration for ML systems"],
    },
    {
      name: "Core Technical & Research",
      skills: ["Semiconductor device modeling and simulation", "Perovskite and multi-junction solar cell optimization", "Numerical analysis of photovoltaic devices", "Charge transport, recombination, and device physics", "Renewable energy systems engineering", "Grid-tied and large-scale solar PV system design", "Satellite and CubeSat communication systems", "RF communication and telemetry handling", "Embedded systems using Linux/Raspberry Pi", "Machine learning for signal and speech processing"],
    },
    {
      name: "Systems & Industrial",
      skills: ["PLC-based motor control and automation", "Power plant operation and synchronization", "Grid and substation operation fundamentals", "Industrial electrical safety practices", "Net-metering configuration and grid integration", "Heavy machinery troubleshooting", "UART / SPI / Serial communication"],
    },
  ],
  projects: [
    {
      name: "Voice Recognition & User Detection System",
      description:
        "A machine-learning-based biometric authentication system that identifies and verifies users using unique vocal features, incorporating MFCC-based feature extraction, noise reduction, voice activity detection, and database-backed real-time matching.",
      link: "https://github.com/shamimreza44/voice-recognition-and-user-detection",
      skills: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Librosa",
        "PyAudio",
        "Machine Learning",
        "Signal Processing",
        "Database Systems",
      ],
    },
    {
      name: "CubeSat Ground Station Communication System",
      description:
        "A Raspberry Pi–based CubeSat ground station designed for real-time telemetry, RF uplink/downlink communication, and satellite signal decoding using SDR, automated data logging, and embedded Linux environments.",
      link: "https://github.com/shamimreza44",
      skills: [
        "Python",
        "C/C++",
        "Linux",
        "Raspberry Pi",
        "Software Defined Radio (SDR)",
        "RF Communication",
        "Embedded Systems",
        "Bash Scripting",
      ],
    },
    {
      name: "Perovskite Solar Cell Simulation & Optimization",
      description:
        "Numerical modeling and optimization of high-efficiency perovskite and multi-junction solar cells using SCAPS-1D and Lumerical FDTD, focusing on device physics, optical analysis, and performance enhancement for renewable energy applications.",
      link: "https://doi.org/10.1016/j.jpcs.2025.113503",
      skills: [
        "SCAPS-1D",
        "Lumerical FDTD",
        "Semiconductor Device Physics",
        "Numerical Simulation",
        "Photovoltaic Modeling",
        "Renewable Energy Systems",
      ],
    },
  ],
  experience: [
    {
      company: "Shahjalal University of Science and Technology (SUST)",
      title: "Undergraduate Researcher, Electrical & Electronic Engineering",
      dateRange: "Jan 2020 – Present",
      bullets: [
        "Conducted numerical simulation and optimization of high-efficiency perovskite and multi-junction solar cells using SCAPS-1D and Lumerical FDTD.",
        "Performed device-level analysis of charge transport, recombination mechanisms, and optical absorption for photovoltaic performance enhancement.",
        "Developed a CubeSat ground station communication system using Raspberry Pi and embedded Linux for real-time telemetry and RF data handling.",
        "Applied machine learning techniques in Python for signal and speech processing, including feature extraction and classification tasks.",
        "Authored and co-authored peer-reviewed journal and international conference publications in renewable energy and semiconductor device modeling.",
      ],
    },
    {
      company: "Training Institute for Chemical Industries (TICI)",
      title: "Industrial Trainee – Power Systems & Automation",
      dateRange: "Nov 2024 – Dec 2024",
      bullets: [
        "Received hands-on training in industrial power plant operation, synchronization, and high-capacity generator systems.",
        "Studied grid transmission, substation operation, and power distribution from national grid to local networks.",
        "Operated and troubleshot PLC-based motor control systems while adhering to industrial electrical safety standards.",
      ],
    },
    {
      company: "Solar Electricity Laboratory & Training Center, Daffodil International University",
      title: "Renewable Energy Trainee – Solar Photovoltaic Systems",
      dateRange: "Sep 2024 – Oct 2024",
      bullets: [
        "Designed and implemented residential and large-scale grid-connected solar PV systems.",
        "Configured grid-tied inverters and net-metering systems for efficient energy conversion and grid integration.",
        "Gained practical experience in installation, testing, and performance evaluation of solar power systems.",
      ],
    },
  ],
  education: [
    {
      school: "Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh",
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      dateRange: "Jan 2020 – Present",
      achievements: [
        "Focused academic training in electrical engineering, semiconductor device physics, and renewable energy systems.",
        "Conducted undergraduate research in perovskite and multi-junction solar cell modeling using SCAPS-1D and Lumerical FDTD.",
        "Authored and co-authored peer-reviewed journal and international conference publications during undergraduate study.",
      ],
    },
    {
      school: "Solar Electricity Laboratory & Training Center, Daffodil International University, Dhaka, Bangladesh",
      degree: "Professional Training in Solar Photovoltaic Systems",
      dateRange: "Sep 2024 – Oct 2024",
      achievements: [
        "Completed hands-on training in residential and large-scale grid-connected solar PV system design and installation.",
        "Gained practical experience with grid-tied inverters, net-metering systems, and PV performance evaluation.",
        "Developed applied understanding of solar energy integration with national power grids.",
      ],
    },
    {
      school: "Training Institute for Chemical Industries (TICI), Narsingdi, Bangladesh",
      degree: "Industrial Training in Power Systems and Automation",
      dateRange: "Nov 2024 – Dec 2024",
      achievements: [
        "Completed industrial-level training on power plant operation, generator synchronization, and grid distribution.",
        "Trained in PLC-based motor control, industrial automation, and electrical safety standards.",
        "Gained exposure to heavy industrial machinery and real-world power system troubleshooting.",
      ],
    },
  ],
};
