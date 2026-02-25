const agents = [
  { name: "Kwame Asante", location: "Accra", specialty: "Youth talents & academy placements", experience: "12 years", contact: "+233241234567", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { name: "Ama Osei", location: "Kumasi", specialty: "Women's football & international scouts", experience: "8 years", contact: "+233549876543", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { name: "Fuseini Yakubu", location: "Tamale", specialty: "Northern talents & local leagues", experience: "10 years", contact: "+233205557890", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { name: "Kofi Mensah", location: "Accra", specialty: "Professional contracts & Europe moves", experience: "15 years", contact: "+233271112222", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400" },
  { name: "Efua Boateng", location: "Cape Coast", specialty: "Coastal region & beach soccer", experience: "6 years", contact: "+233334445555", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400" }
];

function showAgents(filtered) {
  const grid = document.getElementById('agents-grid');
  grid.innerHTML = '';

  filtered.forEach(agent => {
    const card = document.createElement('div');
    card.className = 'bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500/30 transition';
    card.innerHTML = `
      <img src="${agent.image}" alt="${agent.name}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold text-white">${agent.name}</h3>
        <p class="text-emerald-400">${agent.location}</p>
        <p class="text-zinc-300">${agent.specialty}</p>
        <p class="text-sm text-zinc-500">Exp: ${agent.experience}</p>
        <a href="https://wa.me/${agent.contact}" target="_blank" class="block bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 rounded-lg mt-4">
          WhatsApp
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterAgents(city) {
  let list = agents;
  if (city !== 'all') list = agents.filter(a => a.location === city);
  showAgents(list);
}

document.addEventListener('DOMContentLoaded', () => {
  showAgents(agents);
});