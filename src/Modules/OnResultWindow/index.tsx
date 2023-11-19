import React from "react";
import Success from "./img/success.png";
import NoSuccess from "./img/nosuccess.png";
import "./onResultWindow.css";
import "./loading.css";

interface Props {
  closeTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  data: string;
  statusCode: number;
}

function OnResultWindow(props: Props) {
  console.log(props.statusCode);

  return (
    <div
      className="on-result-bg"
      onClick={() => {
        if (!props.loading) {
          props.closeTrigger(false);
        }
      }}
    >
      <div className="on-result-window">
        {props.loading && <LoadingCircle />}
        {!props.loading && (
          <OnResultContent data={props.data} statusCode={props.statusCode} />
        )}
      </div>
    </div>
  );
}

function OnResultContent(props: { data: string; statusCode: number }) {
  return (
    <div className="on-result-content">
      {props.statusCode >= 200 && props.statusCode <= 300 ? (
        <>
          <img src={Success} alt="success-img" />
          <h2>Success</h2>
        </>
      ) : (
        <>
          <img src={NoSuccess} alt="unsuccess-img" />
          <h2>Error oqupated</h2>
        </>
      )}
      <p>{props.data}</p>
    </div>
  );
}

function LoadingCircle() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default OnResultWindow;
