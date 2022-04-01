
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { data } from '../model/model';

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    // baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API }),

    tagTypes: ['data'],
    endpoints: (builder) => ({

        contacts: builder.query<data[], void> ({
            query: () => '/contacts',
            providesTags: ['data']
        }),

        contact: builder.query<data, string>({
            query:(id) => `/contacts/${id}`,
            providesTags: ['data']
        }),

        addContact: builder.mutation<void, data>({
            query: cont => ({
                url: '/contacts',
                method: 'POST',
                body: cont
            }),
            invalidatesTags: ['data']
        }),

        updateContact: builder.mutation<void, data>({
            query: ({id, ...rest}) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['data']
        }),

        deleteContact: builder.mutation<void, string>({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['data']
        })
    })
})


export const { useContactsQuery, 
               useContactQuery,
                useAddContactMutation,
                useUpdateContactMutation,
                useDeleteContactMutation
                } = contactsApi;


