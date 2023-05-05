import { navigate } from "gatsby-link"
import React from "react"
import Layout from "../../components/Layout/Layout"
import PrimaryButton from "../../components/PrimaryButton"
import {
  BackButton,
  Image,
  InfoContainer,
  Input,
  InputForm,
  Subtitle,
  Title,
  Wrapper,
} from "./Styles-Toy"
// import useStore from "../context/StoreContext"
// import useInput from "../utils/useInput"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  // const { addVariantToCart } = useStore()
  // const bind = useInput(1)

  return (
    <Layout>
      <BackButton onClick={() => navigate(-1)}>{"< "} Back</BackButton>
      <Wrapper>
        <Image src={product.media[0]?.image.src} />
        <InfoContainer>
          <Title>{product.title}</Title>
          <Subtitle>{product.priceRangeV2.maxVariantPrice.amount}$</Subtitle>
          <p>{product.description}</p>
          <InputForm>
            <Subtitle>
              <label htmlFor="qty">Quantity:</label>
            </Subtitle>
            {/*<Input placeholder="1" id="qty" type="number" {...bind} />*/}
            <Input placeholder="1" id="qty" type="number" defaultValue={1} />
          </InputForm>
          {/*<PrimaryButton text="Add to cart" onClick={() => addVariantToCart(product, bind.value)} />*/}
          <PrimaryButton
            text="Add to cart"
            onClick={() => alert("Added to cart!")}
          />
        </InfoContainer>
      </Wrapper>
    </Layout>
  )
}

export default ProductTemplate
