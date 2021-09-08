import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

function App() {
  return (
    <>
    <NavBar />
      <div className="Container">
        <h1 className="txt-primary">Olá mundo!</h1>        

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
