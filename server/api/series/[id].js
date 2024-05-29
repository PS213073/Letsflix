export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const { AccessToken } = config;
    const seriesid = event.context.params.id;

    const seriesDetailUrl = `https://api.themoviedb.org/3/tv/${seriesid}`;
    const seriesDetails = await $fetch(seriesDetailUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
    });
    return seriesDetails;
});
