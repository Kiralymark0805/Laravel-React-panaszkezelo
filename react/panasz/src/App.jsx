import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);

  // Get all complaints on component mount
  useEffect(() => {
    GetAllComplaint();
  }, []);

  // Fetch complaints
  function GetAllComplaint() {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }

  // Delete complaint
  const DeleteComplaint = (id) => {
    fetch(`http://127.0.0.1:8000/api/panasz/${id}`, { method: "DELETE" }).then(
      () => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      }
    );
  };

  // Map through complaints and return Card component
  function WriteJson(data) {
    return data.map((complain) => (
      <Card
        key={complain.id}
        UserName={complain.Nev}
        Email={complain.Email}
        UserID={complain.UgyfelAzonosito}
        Description={complain.Leiras}
        DeleteComplaint={() => DeleteComplaint(complain.id)}
      ></Card>
    ));
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <img
            className="logo"
            src="public/images/logo.png"
            alt="Yettel logo"
          />
          <a href="https://www.yettel.hu/" target="_blank" className="title">
            Yettel HUNGARY
          </a>
        </div>
      </header>

      <main className="main-content">
        <div className="content-container">
          <h2 className="section-title">Panaszok kezelése</h2>
          <div className="complaints-container">
            {data ? WriteJson(data) : <p>Panaszok betöltése...</p>}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; Yettel HU. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}

export default App;
