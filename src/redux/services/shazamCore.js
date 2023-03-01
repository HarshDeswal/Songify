import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

  export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl :'https://shazam.p.rapidapi.com',
        prepareHeaders :(headers)=>{
            headers.set('X-RapidAPI-Key','f68553add8msh5200b60a4c40c58p1f6d34jsn05b0ac15e397');

            return headers;
        },
        paramsSerializer:(params)=>{
          params.set('locale','en-US','pageSize','50','startFrom','0')
        }
    }),
    endpoints:(builder) => ({
        getTopCharts:builder.query({query: ()=> '/charts/track'}),
        getSongDetails:builder.query({query:({songid})=>`/songs/get-details?key=${songid}`}),
        getSongRelated:builder.query({query: ({songid})=>`/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
        getArtistDetails:builder.query({query:(artistId) => `/artists/get-top-songs?id=${artistId}`}),
        getSongsBySearch:builder.query({query:(searchTerm)=>`/search?term=${searchTerm}`}),
        // getSongsByCountry: builder.query({query:(countryCode) => `/charts/country?country_code=${countryCode}`}),

    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsBySearchQuery
    // useGetSongsByCountryQuery
  } = shazamCoreApi;