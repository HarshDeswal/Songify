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
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;