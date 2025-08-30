// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })

  // Active navigation link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]")
    const scrollPos = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"))
        if (navLink) {
          navLink.classList.add("active")
        }
      }
    })
  }

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveNavLink)

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simple form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.")
      return
    }

    // Simulate form submission
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Skill tags hover effect
  const skillTags = document.querySelectorAll(".skill-tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Project cards hover effect
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 10px 30px rgba(0, 188, 212, 0.2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none"
    })
  })
})
