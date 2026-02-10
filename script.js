let events = [
  {
    id: 1,
    title: "Techathon'26",
    category: "Hackathon",
    department: "CSE",
    date: "2026-02-20",
    link: "#",
    bookmarked: false
  },
  {
    id: 2,
    title: "Fracticals",
    category: "Competition",
    department: "ECE",
    date: "2026-02-22",
    link: "#",
    bookmarked: false
  },
  {
    id: 3,
    title: "Robotics Club Orientation",
    category: "Club",
    department: "MECH",
    date: "2026-02-25",
    link: "#",
    bookmarked: false
  },
];

let activeCategory = "All";
let activeDepartment = "All";

function renderEvents() {
  const eventList = document.getElementById("eventList");
  if (!eventList) return;

  eventList.innerHTML = "";

  const filteredEvents = events.filter(event => {
    const categoryMatch =
      activeCategory === "All" || event.category === activeCategory;

    const departmentMatch =
      activeDepartment === "All" || event.department === activeDepartment;

    return categoryMatch && departmentMatch;
  });

  if (filteredEvents.length === 0) {
    eventList.innerHTML = "<p>No events found for selected filters.</p>";
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.category} • ${event.department}</p>
      <p>Date: ${event.date}</p>
      <div class="event-actions">
        <a href="${event.link}">Register</a>
        <button onclick="toggleSave(${event.id})">
          ${event.bookmarked ? "★" : "☆"}
        </button>
      </div>
    `;

    eventList.appendChild(card);
  });
}

function setCategory(category) {
  activeCategory = category;
  renderEvents();
}

function setDepartment(dept) {
  activeDepartment = dept;
  renderEvents();
}

function toggleSave(id) {
  events = events.map(event =>
    event.id === id
      ? { ...event, bookmarked: !event.bookmarked }
      : event
  );
  renderEvents();
}

const adminForm = document.getElementById("adminForm");
if (adminForm) {
  adminForm.addEventListener("submit", e => {
    e.preventDefault();

    events.push({
      id: Date.now(),
      title: eventTitle.value,
      category: eventCategory.value,
      department: eventDept.value,
      date: eventDate.value,
      link: eventLink.value,
      bookmarked: false
    });

    adminForm.reset();
    alert("Event added successfully!");
  });
}

renderEvents();
document.querySelector(".notification-icon")
  .addEventListener("click", () => {
    const box = document.getElementById("notificationBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
  });

