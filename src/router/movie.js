export default {
    path : '/movie',
    component : () => import('@/views/Movie.vue'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City.vue')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon.vue')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying.vue')
        },
        {
            path : 'search',
            component : () => import('@/components/Search.vue')
        },
        // {
        //     path : '/movie',
        //     redirect : '/movie/nowPlaying'
        // }
    ]
}