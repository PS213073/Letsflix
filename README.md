# Letsflix Movie App

This is a movie app built with Nuxt.js, Tailwind CSS, and Font Awesome. It uses the TMDB API to fetch movie data. The app is deployed on [Vercel](https://vercel.com/). It was inspired by [movies.nuxt.space](https://movies.nuxt.space/).

## Features

- Browse movies by category
- Search for movies/series
- View movie/series details

## Technologies Used

- [Nuxt.js](https://nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
- [Vercel](https://vercel.com/)
- [Nuxt Sitemap](https://www.npmjs.com/package/@nuxtjs/sitemap)
- [Nuxt SEO](https://www.npmjs.com/package/@nuxtjs/seo)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/PS213073/Letsflix.git
cd movie-app
```
2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory and add your TMDB API key:
```bash
echo "AccessToken=your_tmdb_api_key" > .env
```

4. Start the development server:
```bash
npm run dev
```
5. The app will be available at http://localhost:3000.

## Deployment

The app is deployed on Vercel. You can access it [here](https://letsflix-flax.vercel.app/).

## SEO and Sitemap

The app uses the Nuxt Sitemap and Nuxt SEO modules for better SEO performance and sitemap generation. The sitemap can be accessed at http://localhost:3000/sitemap.xml.

## Configuration

The app's configuration is defined in the `nuxt.config.js` file. It includes the following:

- Devtools enabled
- Modules used: Tailwind CSS, Font Awesome, Nuxt Sitemap, Nuxt SEO
- Font Awesome icons used: house, film, tv, search, play
- Runtime configuration: Access Token
- App title and meta content
- Site URL
