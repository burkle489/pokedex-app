import * as React from "react"
import { BodyText } from "../components/bodyText"
import { Button } from "../components/button"
import { ContentContainer } from "../components/contentContainer"
import '../styles/index.scss'
import PokedexText from '../svgAssets/Pokedex.svg'

// markup
const IndexPage = () => {
  return (
    <main>
      <ContentContainer>
<h1>H1 HEADER</h1>
<h2>H2 HEADER</h2>
<h3>H3 HEADER</h3>
<h4>H4 HEADER</h4>
<BodyText fontWeight="Light">LIGHT TEXT</BodyText>
<BodyText fontWeight="Medium">MEDIUM TEXT</BodyText>
<BodyText fontWeight="Bold">BOLD TEXT</BodyText>
<BodyText fontSize='Small' fontWeight="Bold">BOLD TEXT</BodyText>
<BodyText fontWeight="Bold">BOLD TEXT</BodyText>
      </ContentContainer>
      <ContentContainer titleImage={PokedexText} className="TestContainer">

      </ContentContainer>
    </main>
  )
}

export default IndexPage
