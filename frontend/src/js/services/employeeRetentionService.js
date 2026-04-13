const API_URL = "/api";
export async function predictEmployee(data) {
  const formData = new URLSearchParams();

  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.mensagem || "Erro na API");
  }

  return result;
}

export async function getMetadata() {
  const response = await fetch(`${API_URL}/metadata`);
  return response.json();
}