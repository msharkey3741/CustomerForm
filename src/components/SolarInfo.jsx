import React from "react";
const solarInfo = props => {
  console.log(props);

  return (
    <React.Fragment>
      <h1>This is the solar info</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            Irvine's most up to do date solar information
          </div>
          <hr />
          <div>
            The Ozone Level(in Dobson Units): <span>{props.solar.ozone}</span>
          </div>
          <div>
            UV Index: <span>{props.solar.uv}</span>
          </div>
          <div>
            Max UV index for the date: <span>{props.solar.uv_max}</span>
          </div>
          <div>
            Max UV index time: <span>{props.solar.uv_max_time}</span>
          </div>
          <div>
            Latest ozone update: <span>{props.solar.uv_time}</span>
          </div>
          <div>
            Sunrise:{" "}
            <span>
              {props.solar.sun_info
                ? props.solar.sun_info.sun_times.sunrise
                : null}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default solarInfo;
