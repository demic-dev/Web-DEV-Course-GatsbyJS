import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Hero from "../components/Hero";
import CourseSections from "../components/CourseSections";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import FinalCTA from "../components/FinalCTA";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CourseSections />
    <Timeline />
    <Projects />
    <FinalCTA />
  </Layout>
);

export default IndexPage;
