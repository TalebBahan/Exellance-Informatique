import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => '/products',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Product']
        }),
        getP: builder.query({
          query: () => '/fasflasfslfjsfksjfiwejfsa',
          transformResponse: res => res,
          providesTags: ['Product']
      }),
        addProducts: builder.mutation({
            query: (Product) => ({
                url: '/products',
                method: 'POST',
                body: Product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (Product) => ({
                url: `/products/${Product.id}`,
                method: 'PUT',
                body: Product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Product']
        }),

    })
})

export const {
    useGetPQuery,
    useGetProductsQuery,
    useAddProductsMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,

} = apiSlice