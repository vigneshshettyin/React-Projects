import React, { useEffect, useState } from "react";
import axiosLikeFetch from "axios-like-fetch";

const Dis_Wis_Covid = () => {
  const [getState, setState] = useState();

  const [getS, setS] = useState();

  useEffect(() => {
    axiosLikeFetch({
      url: "https://api.covid19india.org/v2/state_district_wise.json",
    })
      .then(function (res) {
        setState(res.data);
        // console.log(res.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  const getMyState = (event) => {
    setS(event.target.value);
    console.log(getS);
  };

  return (
    <div>
      <h2 className="text-danger">District Wise Covid-19 Stats 😠</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm pt-2">
            <select className="form-control" value={getS} onChange={getMyState}>
              {getState ? (
                getState.map((val, index) => (
                  <option value={index}>{val.state}</option>
                ))
              ) : (
                <h6 className="text-center text-danger">No Data Recived</h6>
              )}
            </select>
          </div>
          <div class="col-sm pt-2">
            <select className="form-control">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dis_Wis_Covid;
