// src/lib/apiBase.js
// Centraliza la base del backend para evitar URLs desalineadas en deploy.
const RAW_BASE = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "http://localhost:4000/api"
).replace(/\/$/, "");

export const API_BASE = RAW_BASE.endsWith("/api") ? RAW_BASE : `${RAW_BASE}/api`;

// Socket.io suele vivir en la raíz (sin /api)
export const SOCKET_BASE = API_BASE.slice(0, -4);
