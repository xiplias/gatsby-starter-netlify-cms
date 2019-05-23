import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import PeopleGroup from '../components/PeopleGroup'
import BigText from '../components/BigText'

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

            <PeopleGroup name="BOARD" people={Array(4).fill(4)} />
            <PeopleGroup name="DIRECTORS" people={Array(5).fill(5)} />
            <BigText title="US IN A NUTSHELL">
              No matter how much industry experience we have or how many times
              we have been up against the ropes or the clock, our hearts remain
              young and our will stays strong.
            </BigText>
            <PeopleGroup people={Array(32).fill(32)} />
          </div>
        </section>
      </Layout>
    )
  }
}
