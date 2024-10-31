/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true, // Опціонально: Включення режиму суворої перевірки React
  swcMinify: true, // Опціонально: Використання SWC для мінімізації
  images: {
    // для отримання інформації про зображення
    domains: ["images.unsplash.com", "nuwm.edu.ua"],
  },
};

export default nextConfig;
