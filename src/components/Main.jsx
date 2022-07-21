import { useState } from "react";

import AnswersList from "./AnswersList.jsx"
import { Form } from "./Form.jsx";

function Main() {
  const initialSurveyState = {
    color: "",
    spendTime: "",
    review: "",
    username: "",
    email: ""
  }

  const [open, setOpen] = useState(false); //Ignore this state
  const [survey, setSurvery] = useState(initialSurveyState)

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList survey={survey}/> */}
      </section>
      <section className="main__form">
        <Form survey={survey} setSurvery={setSurvery} initialSurveyState={initialSurveyState}/>
      </section>
    </main>
  );
}

export default Main;
