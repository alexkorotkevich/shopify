import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import ProductCard from "../components/ToysCard/ToysCard"
import Seo from "../components/seo"

const Toys = ({ data }) => {
  const { nodes } = data.allShopifyProduct

  return (
    <Layout>
      <Seo title="Products" />
      <Wrapper>
        {nodes?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Wrapper>
    </Layout>
  )
}

export default Toys

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        handle
        variants {
          shopifyId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        media {
          ... on ShopifyMediaImage {
            image {
              src
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(3, auto);
  justify-content: left;
  gap: 40px;
  max-width: 1234px;
`
