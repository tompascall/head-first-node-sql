const React = require('react');
const DefaultLayout = require('../layouts/default');

const HeroList = (props) => {
  return (<DefaultLayout>
    <h1>Guitar Heroes</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Score</th>
        <th>Screenshot</th>
      </tr>
      {
        props.heroes.map(hero =>
          <tr key={ hero.date }>
            <td>{ hero.name}</td>
            <td>{ hero.date.toLocaleString() }</td>
            <td>{ hero.score }</td>
            <td>
              <img height='200' width='200' src={ `/screenshots/${hero.screenshot}` }/>
            </td>
          </tr>
        )
      }
    </table>
  </DefaultLayout>)
};

module.exports = HeroList;