export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const { AccessToken } = config
  const movieid = event.context.params.id

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieid}`
  const movieDetails = await $fetch(movieDetailUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`
    },
  })

  return movieDetails;
})