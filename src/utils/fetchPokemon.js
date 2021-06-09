import React from "react";

export function fetchPokemon(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window.fetch(`${endpoint}`, config).then(async (response) => {
    // native fetch only fails if the request fails, not for client errors
    if (response.ok) return await response.json();

    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  });
}
