export function getAllJobs(data) {
  return fetch("http://localhost:8000/api/jobs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
  });
}

export function getJobById(state, id) {
  return fetch(`http://localhost:8000/api/jobs/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${state.token}`,
    },
  });
}

export function newJob(data, stateAuth) {
  const { token, user } = stateAuth;
  return fetch("http://localhost:8000/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      description: data.description,
      userId: user.id,
    }),
  });
}
