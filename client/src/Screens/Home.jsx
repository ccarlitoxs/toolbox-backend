import { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Header from "../Components/Header";
import TableItem from "../Components/TableItem";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useFilesList } from "../Hooks/useFilesList";

const Home = () => {
  const { isLoading, isError, getFilesData, filesData } = useFilesList();
  const [searchInput, setSearchInput] = useState("");

  const HandleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const HandleSearch = (e) => {
    getFilesData(searchInput);
  };

  console.log(filesData);

  return (
    <>
      <Header
        title="React Test App"
        onClickTitle={getFilesData}
        onClickSearch={HandleSearch}
        valueSearch={searchInput}
        onChange={HandleChange}
      />
      <Container>
        {isLoading ? (
          <ProgressBar animated now={100} />
        ) : isError ? (
          <div>Error en la página</div>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {filesData.length === 0 ? (
                <TableItem fileName="Data not found for this search" />
              ) : (
                filesData
                  .map((file) => file.lines)
                  .flat(1)
                  .map((line, index) => (
                    <TableItem
                      key={`TableItem-${index}`}
                      fileName={line.file}
                      text={line.text}
                      number={line.number}
                      hex={line.hex}
                    />
                  ))
              )}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Home;
