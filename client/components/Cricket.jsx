import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cricket() {
  const [cricketData, setCricketData] = useState([]);
  console.log(cricketData);

  let battingTestRun = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_Runs - a.BATTING_Tests_Runs
  );
  console.log(battingTestRun[0], "test most run");

  let testHundred = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_100 - a.BATTING_Tests_100
  );
  console.log(testHundred[0], "test hundred");

  let testMatch = [...cricketData].sort(
    (a, b) => b.BATTING_Tests_Mat - a.BATTING_Tests_Mat
  );
  console.log(testMatch[0], "test match");


  let odiWicketData = [...cricketData].filter(
    (e) => e.BOWLING_ODIs_Wkts !== "-" && e.BOWLING_ODIs_Wkts
  );
  let odiWicket = odiWicketData.sort(
    (a, b) => b.BOWLING_ODIs_Wkts - a.BOWLING_ODIs_Wkts
  );
  console.log(odiWicket[0], "odi most wicket");

  let testWicketData = [...cricketData].filter(
    (e) => e.BOWLING_Tests_Wkts && e.BOWLING_Tests_Wkts !== "-"
  );
  let testWicket = testWicketData.sort(
    (a, b) => b.BOWLING_Tests_Wkts - a.BOWLING_Tests_Wkts
  );
  console.log(testWicket[0], "test wicket");

  let odiBattingRunData = [...cricketData].filter(
    (e) => e.BATTING_ODIs_Runs && e.BATTING_ODIs_Runs !== "-"
  );
  let battingODIRun = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_Runs - a.BATTING_ODIs_Runs
  );
  console.log(battingODIRun[0], "odi most run");

  let odiHundred = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_100 - a.BATTING_ODIs_100
  );

  console.log(odiHundred[0], "oidHundred");

  let odiMatch = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_Mat - a.BATTING_ODIs_Mat
  );
  console.log(odiMatch[0], "odi match");

  let odiMostBallFace = odiBattingRunData.sort(
    (a, b) => b.BATTING_ODIs_BF - a.BATTING_ODIs_BF
  );
  console.log(odiMostBallFace[0], "most ball face");

  useEffect(() => {
    axios.get("/cricket").then((res) => {
      setCricketData(res.data.cricket);
    });
  }, []);

  return <div>Hello</div>;
}
