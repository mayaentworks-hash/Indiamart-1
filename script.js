const messages = [
  {
    name: "Dmart",
    location: "Kolhapur",
    text: "I am interested in C Bracket Type B",
    time: "6th Apr"
  },
  {
    name: "Nilesh Hardware",
    location: "Wardha",
    text: "Need first sample",
    time: "6th Apr"
  },
  {
    name: "Deepa",
    location: "Chennai",
    text: "Mounting brackets required",
    time: "6th Apr"
  }
];

const leads = [
  {
    product: "Air Conditioner Stand",
    location: "Indore",
    qty: "50 Piece",
    time: "18 hr ago"
  },
  {
    product: "18 Inch AC Stand",
    location: "Chennai",
    qty: "15 Set",
    time: "Yesterday"
  },
  {
    product: "DIN Rail Clamp",
    location: "Hyderabad",
    qty: "-",
    time: "12 hr ago"
  }
];

// Render Messages
function renderMessages() {
  const box = document.getElementById("messages");
  box.innerHTML = "";

  messages.forEach(m => {
    box.innerHTML += `
      <div class="item">
        <b>${m.name}</b><br>
        <span class="small">${m.location}</span><br>
        ${m.text}<br>
        <span class="small">${m.time}</span>
      </div>
    `;
  });
}

// Render Leads
function renderLeads(id) {
  const box = document.getElementById(id);
  box.innerHTML = "";

  leads.forEach(l => {
    box.innerHTML += `
      <div class="item">
        <b>${l.product}</b><br>
        <span class="small">${l.location}</span><br>
        Quantity: ${l.qty}<br>
        <span class="small">${l.time}</span>
      </div>
    `;
  });
}

// Init
renderMessages();
renderLeads("relevant");
renderLeads("recent");