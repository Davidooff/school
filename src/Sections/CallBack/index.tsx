import "./callback.css";
import SelectList from "../../Modules/SelectList";

var lesonsList = ["Math", "Python", "JavaScript", "Django"];

function CallBack() {
  return (
    <section className="call-back">
      <div className="content">
        <div className="frame">
          <form action="" className="call-back-form">
            <h3 className="title">Request Call Back</h3>
            <div className="call-back-inputs">
              <div className="call-back_form-row">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="age" placeholder="Age" />
              </div>
              <div className="call-back_form-row">
                <input type="text" name="phone" placeholder="Phone" />
                <SelectList
                  className="call-back_drop-list"
                  name="subject"
                  placeholder="Subject"
                  list={lesonsList}
                />
              </div>
            </div>
            <button type="submit" className="rich-text">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CallBack;
