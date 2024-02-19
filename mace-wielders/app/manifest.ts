import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        "name": "Holy Cow, Animal Detector",
        "short_name": "Holy Cow",
        "description": "An application built with Next.js",
        "start_url": "/",
        "scope": "./",
        display: "standalone",
        background_color: '#fff',
        theme_color: 'gray',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}