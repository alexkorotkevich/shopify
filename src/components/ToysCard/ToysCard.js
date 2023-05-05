import { navigate } from "gatsby-link"
import React from "react"
import {
  AddButton,
  ContentWrapper,
  Image,
  Price,
  TextWrapper,
  Title,
  Wrapper,
} from "./Styles-Toys_Card"

const ProductCard = ({ product }) => {
  // console.log("product", product.title)
  return (
    <Wrapper>
      <AddButton onClick={() => alert("Added to cart!")}>
        <p>+</p>
      </AddButton>
      <ContentWrapper onClick={() => navigate(`${product.handle}`)}>
        <Image src={product.media[0]?.image.src} />
        <TextWrapper>
          <Title>{product.title}</Title>
          <Price>{product.priceRangeV2.maxVariantPrice.amount}$</Price>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProductCard
