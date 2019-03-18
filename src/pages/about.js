import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default class AboutIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <PageTitle
              preTitle="WE THE PEOPLE"
              title="YOUNG AND HUNGRY, 
WITH A COMPULSION TO CREATE"
              description="In an industry of continuous change, your people are the only constant. Shape is a multicultural, multinational and multi-discipline team of thinkers, adapters and most importantly, doers."
            />
          </div>
        </section>
      </Layout>
    );
  }
}
