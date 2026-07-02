// ====== DATA — silakan edit sesuai kebutuhan kamu ======
const skills = [
  { name: "Arduino Programming", level: 70 },
  { name: "Internet of Things (IoT)", level: 75 },
  { name: "Sensor Integration", level: 80 },
  { name: "Instrumentation System", level: 80 },
  { name: "Electronic Troubleshooting", level: 85 },
  { name: "PCB & Circuit Analysis", level: 85 },
  { name: "MATLAB", level: 70 },
  { name: "Proteus", level: 85 },
  { name: "Microsoft Office", level: 80 },
  { name: "Problem Solving", level: 85 },
  { name: "Teamwork", level: 90 },
  { name: "Communication", level: 90 },
];

const tools = ["Arduino IDE", "Proteus", "MATLAB", "Visual Studio Code", "Microsoft Office"];

const interests = ["Internet of Things (IoT)", "Instrumentasi", "Otomasi Industri", "Elektronika Terapan"];

const projects = [
  { title: "Automatic Hand Washing and Drying System", year: 2025 },
  { title: "IoT-Based Egg Incubator Temperature Control System", year: 2025 },
  { title: "Sistem Monitoring Suhu dan Kelembaban Berbasis IoT", year: 2025 },
  { title: "Sistem Kendali Lampu Otomatis Berbasis Sensor Gerak", year: 2024 },
  { title: "Rancang Bangun Sistem Sortasi Ikan Lele Otomatis Berbasis Internet of Things Menggunakan Mekanisme Konveyor dan Sensor Berat (Tugas Akhir)", year: 2026 },
];

// ====== RENDER ======
const skillList = document.getElementById("skillList");
skills.forEach(s => {
  const li = document.createElement("li");
  li.className = "skill-item";
  li.innerHTML = `
    <div class="skill-row"><span>${s.name}</span><span class="pct">${s.level}%</span></div>
    <div class="bar-track"><div class="bar-fill" style="width:${s.level}%"></div></div>
  `;
  skillList.appendChild(li);
});

const toolsList = document.getElementById("toolsList");
tools.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  toolsList.appendChild(li);
});

const interestList = document.getElementById("interestList");
interests.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  interestList.appendChild(li);
});

const projectList = document.getElementById("projectList");
projects.forEach((p, i) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="proj-num">${i + 1}</div>
    <div class="proj-body">${p.title}</div>
    <div class="proj-year">🗓 ${p.year}</div>
  `;
  projectList.appendChild(li);
});

document.getElementById("year").textContent = new Date().getFullYear();
