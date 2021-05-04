import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ModalCard from "./ModalCard";

export default function Cricket() {
  const [cricketData, setCricketData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState("");

  const changeModel = (data) => {
    setModalShow(true);
    setData(data);
  };

  let battingTestRun = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_Runs - a.BATTING_Tests_Runs
  );

  let testHundred = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_100 - a.BATTING_Tests_100
  );

  let testMatch = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_Mat - a.BATTING_Tests_Mat
  );

  let odiWicketData = [...cricketData].filter(
    (e) => e.BOWLING_ODIs_Wkts !== "-" && e.BOWLING_ODIs_Wkts
  );

  let odiWicket = odiWicketData.sort(
    (a, b) => b.BOWLING_ODIs_Wkts - a.BOWLING_ODIs_Wkts
  );

  let testWicketData = [...cricketData].filter(
    (e) => e.BOWLING_Tests_Wkts && e.BOWLING_Tests_Wkts !== "-"
  );
  let testWicket = testWicketData.sort(
    (a, b) => b.BOWLING_Tests_Wkts - a.BOWLING_Tests_Wkts
  );

  let odiBattingRunData = [...cricketData].filter(
    (e) => e.BATTING_ODIs_Runs && e.BATTING_ODIs_Runs !== "-"
  );
  let battingODIRun = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_Runs - a.BATTING_ODIs_Runs
  );

  let odiHundred = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_100 - a.BATTING_ODIs_100
  );

  let odiMatch = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_Mat - a.BATTING_ODIs_Mat
  );

  let odiMostBallFace = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_BF - a.BATTING_ODIs_BF
  );

  useEffect(() => {
    axios.get("/cricket").then((res) => {
      setCricketData(res.data.cricket);
    });
  }, []);

  return (
    <section
      className="cricket d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/sachin.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {cricketData.length > 0 ? (
        <>
          <div className="d-flex flex-wrap container-xl">
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(battingTestRun[0]);
                }}
              >
                Most Test Runs
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>

            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(testHundred[0]);
                }}
              >
                Most Test Hundred
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(testMatch[0]);
                }}
              >
                Most Test Match
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(testWicket[0]);
                }}
              >
                Most Test Wicket
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(battingODIRun[0]);
                }}
              >
                Most ODI Runs
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(odiHundred[0]);
                }}
              >
                Most ODI Hundred
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>

            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(odiMostBallFace[0]);
                }}
              >
                Most ODI Ball Face
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>

            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  changeModel(odiMatch[0]);
                }}
              >
                Most ODI Match
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>

            <>
              <button
                className="btn btn-primary"
                onClick={() => changeModel(odiWicket[0])}
              >
                Most ODI Wicket
              </button>
              <ModalCard
                playerdata={data}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </div>
        </>
      ) : (
        <div>
          <Spinner animation="border" variant="light" />
        </div>
      )}
      <div className="heading">Who is the Best?</div>
    </section>
  );
}
