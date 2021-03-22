export const PersonsTable = ({ persons, border }) => (
  <table border={border}>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Links</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {persons.map((person, index) => (
        <tr key={index}>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td>
            <a target="_blank" href={person.url}>
              GitHub
            </a>
          </td>
          <td>
            <a href="#" className="delete-row" data-id="{person.id}">
              &#10006;
            </a>
            <a href="#" className="edit-row" data-id="{person.id}">
              &#9998;
            </a>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td>
          <input type="text" placeholder="Enter first name" name="firstName" />
        </td>
        <td>
          <input type="text" placeholder="Enter last name" name="lastName" />
        </td>
        <td>
          <input type="text" placeholder="Enter Github account" name="gitHub" />
        </td>
        <td>
          <button>Save</button>
        </td>
      </tr>
    </tfoot>
  </table>
);
