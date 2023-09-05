/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    },
    compiler:{
        removeConsole:true,
    }
}

module.exports = nextConfig
