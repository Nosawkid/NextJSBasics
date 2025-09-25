/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"encrypted-tbn0.gstatic.com",
                protocol:"https",
                port:""
            },
            {
                hostname:"lh3.googleusercontent.com",
                protocol:"https",
                port:""
            },
            {
                hostname:"evek.one",
                protocol:"https",
                port:""
            },
            {
                hostname:"i.sstatic.net"
            }
        ]
    }
};

export default nextConfig;
