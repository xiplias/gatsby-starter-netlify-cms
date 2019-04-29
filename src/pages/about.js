import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ImageBox from "../components/ImageBox";

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
            <h2>BOARD</h2>
            <div className="container">
              <div className="columns is-multiline">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="column is-3 work-item">
                    <ImageBox
                      height={340}
                      title="Christian Risom"
                      subtitle="Employee title"
                    />
                  </div>
                ))}
              </div>
            </div>
            <h2>DIRECTORS</h2>
            <div className="container">
              <div className="columns is-multiline">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="column is-3 work-item">
                    <ImageBox
                      height={340}
                      title="Christian Risom"
                      subtitle="Employee title"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
