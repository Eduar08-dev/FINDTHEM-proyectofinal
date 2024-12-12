/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
          pathname: "/v0/b/**", // O ajusta el patrón si necesitas ser más específico
        },
      ],
    },
  }

export default nextConfig;
