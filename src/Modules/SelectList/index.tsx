import { useState } from "react";
import "./selectList.css";

interface Props {
  className: string;
  list: string[];
  placeholder: string;
  name: string;
  choiceState?: {
    set: React.Dispatch<React.SetStateAction<Array<string>>>;
    read: Array<string>;
  };
}

function Index(props: Props) {
  var choiceState: {
    set: React.Dispatch<React.SetStateAction<Array<string>>>;
    read: Array<string>;
  };
  if (!props.choiceState) {
    const [choice, setChoice] = useState<Array<string>>([]);
    choiceState = {
      set: setChoice,
      read: choice,
    };
  } else {
    choiceState = props.choiceState;
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className={props.className} style={{ position: "relative" }}>
      <span
        className="drop-list-input-cover"
        onClick={() => setIsVisible(!isVisible)}
      ></span>
      <input
        className="drop-list-input"
        type="text"
        name={props.placeholder}
        placeholder={props.placeholder}
        value={choiceState.read.join(", ")}
        disabled
      />
      {isVisible && (
        <DropList
          list={props.list}
          choosedList={choiceState.read}
          setChoosedList={choiceState.set}
        />
      )}
    </span>
  );
}

interface DropListProps {
  list: Array<string>;
  choosedList: Array<string>;
  setChoosedList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

function DropList(props: DropListProps) {
  function clickEvent(clikedOn: string) {
    console.log(clikedOn);

    let searchRes = props.choosedList.indexOf(clikedOn);
    if (searchRes === -1) {
      props.choosedList.push(clikedOn);
    } else {
      props.choosedList.splice(searchRes, 1);
    }
    props.setChoosedList([...props.choosedList]);
  }

  return (
    <ul className="drop-list">
      {props.list.map((el) => {
        return (
          <li
            key={el}
            onClick={() => {
              clickEvent(el);
            }}
          >
            <span
              className={
                props.choosedList.indexOf(el) !== -1
                  ? "circle active"
                  : "circle"
              }
            ></span>
            {el}
          </li>
        );
      })}
    </ul>
  );
}

export default Index;
