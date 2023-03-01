import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

  export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl :'https://shazam.p.rapidapi.com',
        prepareHeaders :(headers)=>{
            headers.set('X-RapidAPI-Key','65c5d8d837msh57d48acb96fe2dap19ae23jsndfaa8d48d21c');

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