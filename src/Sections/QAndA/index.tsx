import "./qanda.css";
import Arrow from "./assets/arrow.png";
import { useEffect } from "react";

function QAndA() {
  useEffect(() => {
    let answers = Array.from(
      document.getElementsByClassName("answer")
    ) as HTMLElement[];
    let questions = Array.from(
      document.getElementsByClassName("question")
    ) as HTMLElement[];
    questions.forEach((question: HTMLElement) => {
      question.onclick = (trigerdQuestion: Event) => {
        let trigerdHTMLQuestion = trigerdQuestion.currentTarget as HTMLElement;
        console.log(trigerdHTMLQuestion);

        let numberOfQuestion = trigerdHTMLQuestion.id.match(/\d*\d/gm)[0];
        console.log(numberOfQuestion);

        reWriteAnswer(Number(numberOfQuestion), answers);
      };
    });
  }, []);

  function reWriteAnswer(numberOfQuestion: number, answers: HTMLElement[]) {
    answers.forEach((answer: HTMLElement) => {
      answer.id === "A" + numberOfQuestion
        ? (answer.style.display = "block")
        : (answer.style.display = "none");
    });
  }

  return (
    <section className="qanda">
      <div className="content join-asides">
        <aside className="questions-side">
          <h2 className="side-title">Q&A</h2>
          <ul className="quesions-list">
            <li id="Q1" className="question">
              <span>Question1</span>
              <img src={Arrow} alt="" />
            </li>
            <li id="Q2" className="question">
              <span>Question1</span>
              <img src={Arrow} alt="" />
            </li>
            <li id="Q3" className="question">
              <span>Question1</span>

              <img src={Arrow} alt="" />
            </li>
            <li id="Q4" className="question">
              <span>Question1</span>

              <img src={Arrow} alt="" />
            </li>
            <li id="Q5" className="question">
              <span>Question1</span>

              <img src={Arrow} alt="" />
            </li>
            <li id="Q6" className="question">
              <span>Question1</span>

              <img src={Arrow} alt="" />
            </li>
            <li id="Q7" className="question">
              Question7
              <img src={Arrow} alt="" />
            </li>
          </ul>
        </aside>
        <aside className="answer-side">
          <ul>
            <li id="A1" className="answer rich-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </li>
            <li id="A2" className="answer rich-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              provident earum dolorem necessitatibus consequuntur rerum, esse
              magni architecto facilis molestias repudiandae, accusamus sapiente
              deleniti. Iste, culpa. Iure magnam itaque ratione enim, aperiam
              recusandae dignissimos suscipit nulla aspernatur quae praesentium
              laboriosam illum voluptatibus nam voluptatum incidunt, explicabo
              eligendi quis, consectetur quo modi? Dolores animi doloribus
              voluptate blanditiis deserunt laboriosam sunt consectetur alias
              molestiae nam.
            </li>
            <li id="A3" className="answer rich-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate maiores itaque eveniet, incidunt voluptatibus nihil hic
              aliquam ipsa, numquam temporibus molestiae. Eos magni nam culpa
              unde eaque voluptatum commodi. Officiis voluptatibus, amet cumque
              modi nemo quia sint ex, cum impedit esse, dolor aspernatur
              corrupti consequatur.
            </li>
            <li id="A4" className="answer rich-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates modi aliquid maiores dolor reiciendis eligendi quas,
              corporis esse tenetur illum aspernatur doloremque, ad asperiores
              quos? Expedita quaerat quisquam ipsum. Aperiam.
            </li>
            <li id="A5" className="answer rich-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus laudantium exercitationem voluptas corporis natus
              voluptatibus magni consequuntur nesciunt quas? Aliquid provident
              repellat vero ducimus nemo qui obcaecati saepe, dolorum
              doloremque, quos deleniti voluptatem atque laudantium quas alias
              natus necessitatibus, fugiat inventore assumenda tempora? Cum
              neque animi porro exercitationem quas similique?
            </li>
            <li id="A6" className="answer rich-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              repudiandae quam reprehenderit quasi magnam earum maiores
              voluptatem laudantium pariatur quas unde fuga perferendis veniam
              at quae, omnis dolorum quisquam ipsum!
            </li>
            <li id="A7" className="answer rich-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quasi quos recusandae quaerat. Commodi quis aliquid ut incidunt
              praesentium, ipsam, dicta voluptates sequi ducimus libero culpa
              nisi eveniet velit iure voluptate, pariatur sapiente ad magni
              perferendis. Minima accusamus iusto aliquam ipsum nam eaque quis
              repellat eveniet quam expedita quas consequatur beatae corrupti
              sequi quibusdam blanditiis doloremque doloribus corporis iste
              ullam hic, aperiam atque. Eum repellat odio cumque doloribus.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default QAndA;
