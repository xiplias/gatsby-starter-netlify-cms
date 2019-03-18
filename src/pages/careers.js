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
              preTitle="CAREERS"
              title="SHAPE THE PRODUCTS
              OF THE FUTURE WITH US"
              description="Join us in solving real problems with gifted people and leading brands. We challenge you, you challenge us. We learn, grow and succeed as one. Be a part of what comes next."
            />
          </div>
        </section>
      </Layout>
    );
  }
}
