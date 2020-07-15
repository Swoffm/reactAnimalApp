const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owner/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owner`).then(result => result.json())
  },
  post(newOwner) {
    return fetch(`${remoteURL}/owner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/owner/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  update(editedOwner) {
    return fetch(`${remoteURL}/owner/${editedOwner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedOwner)
    }).then(data => data.json());
  },
  // Add this method to the AnimalManager object
  getRandomId() {
    return fetch(`${remoteURL}/owner`)
      .then(result => result.json())
      .then(owner => {
        const randomIndex = Math.floor(Math.random() * owner.length);
        const randomOwner = owner[randomIndex];
        return randomOwner.id;
      });
  }
}