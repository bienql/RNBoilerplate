import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { CategoryRespone } from 'app/models/category.model';
import { gql } from 'graphql-request';
import Config from 'react-native-config';

export const cmsApi = createApi({
  reducerPath: 'cmsApi',

  baseQuery: graphqlRequestBaseQuery({
    url: Config.API_CMS_URL,
  }),

  endpoints: (builder) => ({
    getCategories: builder.query<CategoryRespone, void>({
      query: () => ({
        document: gql`
          {
            category {
              displayText
              parentCategory {
                contentItemIds
                contentItems {
                  displayText
                  contentType
                }
              }
              name
              active
              sortPriority
              promotionalCategory
              menuImage {
                paths
                urls
              }
              promotionDescription
              modifiedUtc
              contentType
              createdUtc
              publishedUtc
            }
          }
        `,
      }),
    }),
    getParentsCategories: builder.query<any, any>({
      query: () => ({
        document: gql`
          {
            category(isaParentCategory: true, orderBy: { displayText: ASC }) {
              displayText
              contentItemId
              isaParentCategory
              categoryType
              categoryBanner {
                urls
                paths
              }
            }
          }
        `,
      }),
    }),
    getParentsCategoriesByMall: builder.query<any, any>({
      query: ({ mallName__Name }) => ({
        document: gql`
          query getCategories($mallName__Name: String!) {
            category(
              isaParentCategory: true
              orderBy: { displayText: ASC }
              mallName__Name: $mallName__Name
            ) {
              displayText
              contentItemId
              isaParentCategory
              categoryType
              categoryBanner {
                urls
                paths
              }
            }
          }
        `,
        variables: {
          mallName__Name,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetParentsCategoriesQuery,
  useGetParentsCategoriesByMallQuery,
} = cmsApi;
