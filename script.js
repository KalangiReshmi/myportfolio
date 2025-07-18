// Animate fade-ins (optional for future)
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});
faders.forEach(fader => observer.observe(fader));

// Modal Project Descriptions
const projectDetails = {
  artGallery: {
    title: "Online Art Gallery (MERN)",
    description: `
      <ul>
        <li>Full-stack e-commerce site with MERN stack</li>
        <li>JWT-based auth, 35% faster APIs</li>
        <li>Responsive design with secure admin dashboard</li>
      </ul>`
  },
  studentERP: {
    title: "Student ERP (Java/JDBC)",
    description: `
      <ul>
        <li>ERP for student record management using Java</li>
        <li>Efficient query handling with JDBC</li>
        <li>40% faster performance with DB optimizations</li>
      </ul>`
  },
  campusRecruitment: {
    title: "Campus Recruitment (Django)",
    description: `
      <ul>
        <li>Django-based portal for college hiring</li>
        <li>Automated filtering and scheduler</li>
        <li>Reduced selection cycle by 25%</li>
      </ul>`
  },
  dietApp: {
    title: "Diet Management App (Spring + React)",
    description: `
      <ul>
        <li>Health & nutrition tracker using Spring Boot & React</li>
        <li>Interactive dashboard with REST APIs</li>
        <li>30% user engagement boost via reminders</li>
      </ul>`
  }
};

function openModal(key) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `<h2>${projectDetails[key].title}</h2>${projectDetails[key].description}`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function (e) {
  if (e.target.id === "projectModal") closeModal();
};

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    })
  );

  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("form-response");
  
  form?.addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwfgLJrHADAhS1IHgYcL5HpA3D0Pc0IT5PlceQf9qzlWCwYlcQzDmBztKwPfeoIMAfe/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        }
      );
  
      if (response.ok) {
        form.reset();
        responseMsg.textContent = "Message sent successfully!";
        responseMsg.style.color = "green";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      responseMsg.textContent = "Something went wrong. Please try again.";
      responseMsg.style.color = "red";
    }
  });
  