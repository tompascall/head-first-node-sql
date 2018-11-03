const React = require('react');
const DefaultLayout = require('../layouts/default');

const HeroList = (props) => (
  <DefaultLayout>
    <h1>Guitar Heroes</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Score</th>
      </tr>
      {
        props.heroes.map(hero =>
          <tr key={ hero.date }>
            <td>{ hero.name}</td>
            <td>{ hero.date.toLocaleString() }</td>
            <td>{ hero.score }</td>
          </tr>
        )
      }
    </table>
  </DefaultLayout>
);

module.exports = HeroList;