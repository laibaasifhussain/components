import "./Table.css";

export default function Table({ dlist }) {
  //   console.log(dlist.map((x, i) => ));

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {dlist.map((x, i) => (
          <tr key={i}>
            <td>{x.id}</td>
            <td>{x.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
