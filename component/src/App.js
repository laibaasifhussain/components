import Input from "./components/Input";
import Button from "./components/Button";
import Select from "./components/Select";
import Table from "./components/Table";

function App() {
  const list = [
    {
      id: 1,
      name: "jonas",
    },
    {
      id: 2,
      name: "Peter",
    },
    {
      id: 3,
      name: "Levis",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  const arrSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input dtext="TypeHere...." />
        <Select dselect={arrSelect} />
        <Button dbutton="Search" />
      </form>

      <Table dlist={list} />
    </>
  );
}

export default App;
