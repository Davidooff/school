import "./callback.css";
import SelectList from "../../Modules/SelectList";
import { useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import OnResultWindow from "../../Modules/OnResultWindow";

const lesonsList = ["Math", "Python", "JavaScript", "Django"];

function CallBack() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [lessons, setLesson] = useState<Array<string>>([]);

  const [showResult, setShowResult] = useState(false);

  const data = { name, age, phone, lessons };
  const [fetchResult, statusCode, loading, fetchData] = useFetch({
    url: import.meta.env.VITE_API_SERVER_URL + "/get-call-back",
    method: "POST",
    body: data,
  });

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(import.meta.env.VITE_API_SERVER_URL);
    e.preventDefault();
    fetchData();
    setShowResult(true);
  }

  return (
    <section className="call-back" id="Contact">
      {showResult && (
        <OnResultWindow
          closeTrigger={setShowResult}
          loading={loading}
          statusCode={statusCode}
          data={JSON.stringify(fetchResult)}
        />
      )}
      <div className="content">
        <div className="frame">
          <form
            action=""
            onSubmit={handleFormSubmit}
            className="call-back-form"
          >
            <h3 className="title">Request Call Back</h3>
            <div className="call-back-inputs">
              <div className="call-back_form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="call-back_form-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <SelectList
                  className="call-back_drop-list"
                  name="subject"
                  placeholder="Subject"
                  list={lesonsList}
                  choiceState={{ read: lessons, set: setLesson }}
                />
              </div>
            </div>
            <button type="submit" className="rich-text">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CallBack;
