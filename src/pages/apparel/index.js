import React from 'react'

import Layout from '../../components/Layout'
import ApparelRoll from '../../components/ApparelRoll'

export default class ApparelIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/grid.jpeg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Designs
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ApparelRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}