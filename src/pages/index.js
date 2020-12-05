import React from "react"
import MainLayout from "layout/MainLayout"

import Landing from "components/sections/Landing"
import Quote from "components/sections/Quote"
import Stats from "components/sections/Stats"
import Opinions from "components/sections/Opinions"
import SEO from "components/sections/SEO"

const IndexPage = () => (
  <MainLayout scrollDown>
    <SEO title="Home" />
    <Landing />
    <Quote />
    <Stats />
    <Opinions />
  </MainLayout>
)

export default IndexPage
