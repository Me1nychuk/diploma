/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")], // Додаємо шлях до стилів
  },
  reactStrictMode: true, // Опціонально: Включення режиму суворої перевірки React
  swcMinify: true, // Опціонально: Використання SWC для мінімізації
};

export default nextConfig;
