const React = require('react');
const DefaultLayout = require('../layouts/default');

const RemoveEmailForm = (props) => (
  <DefaultLayout>
    <h1>Remove emails from the mailing list</h1>
    <form method='post' action='/elvis-store/remove-emails'>
      <ul>
        { props.rows.map((row) => (
          <li key={ row.id }>
            <input
              name={`id-${row.id}`}
              type='checkbox'
              value={ row.id }
            />
            <span>{`${row.first_name}, ${row.last_name}, ${row.email}`}</span>
          </li>
        ))}
      </ul>
      <button type='submit' name='submit'>REMOVE</button>
    </form>
  </DefaultLayout>
);

module.exports = RemoveEmailForm;