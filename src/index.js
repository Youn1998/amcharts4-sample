import html2canvas from "html2canvas";
import React from "react";
import ReactDOM from "react-dom";
import SalesChart from "./Sales";

import "./styles.css";

function App() {
  const saveAsImage = (uri) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;

      downloadLink.download = "SalesChart.png";

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };

  const onClickExport = () => {
    const target = document.getElementById("SalesChart");
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    });
  };

  const ExportButton = () => (
    <button onClick={() => onClickExport()}>出力</button>
  );

  return (
    <div className="App">
      <SalesChart />
      <ExportButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
