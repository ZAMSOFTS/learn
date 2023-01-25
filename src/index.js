import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Ndata from "./Ndata";

ReactDOM.render(
  <>
    <h4 className="heading_style">Top 5 Naats in 2023</h4>

    <App
      pic={Ndata[0].pic}
      cat={Ndata[0].cat}
      tit={Ndata[0].tit}
      link={Ndata[0].link}
      dlink={Ndata[0].dlink}
    />
    <App
      pic={Ndata[1].pic}
      cat={Ndata[1].cat}
      tit={Ndata[1].tit}
      link={Ndata[1].link}
      dlink={Ndata[1].dlink}
    />
    <App
      pic={Ndata[2].pic}
      cat={Ndata[2].cat}
      tit={Ndata[2].tit}
      link={Ndata[2].link}
      dlink={Ndata[2].dlink}
    />
    <App
      pic={Ndata[3].pic}
      cat={Ndata[3].cat}
      tit={Ndata[3].tit}
      link={Ndata[3].link}
      dlink={Ndata[3].dlink}
    />
    <App
      pic={Ndata[4].pic}
      cat={Ndata[4].cat}
      tit={Ndata[4].tit}
      link={Ndata[4].link}
      dlink={Ndata[4].dlink}
    />
  </>,
  document.getElementById("root")
);
