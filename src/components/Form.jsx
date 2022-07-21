export function Form (props) {

    const updateSurveyDetails = (event) => {
        event.preventDefault()
    
        const eventName = event.target.name
        const eventValue = event.target.value
    
        const newSurveyDetails = {...props.survey, [eventName]: eventValue}
    
        props.setSurvery(newSurveyDetails)
    
        console.log("state name", eventName)
    
        console.log("state value ", eventValue)

        console.log("state is ", props.survey)
      }

    const displayState = (event) => {
        event.preventDefault()

        console.log("state is ", props.survey)

        props.setSurvery(props.initialSurveyState)
      }

    return (
        <form class="form" onSubmit={displayState}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input onChange={updateSurveyDetails} checked={props.survey.color === "1"} id="color-one" type="radio" name="color" value="1" /><label
                        for="color-one"
                        >1</label
                        >
                    </li>
                    <li>
                        <input onChange={updateSurveyDetails} checked={props.survey.color === "2"} id="color-two" type="radio" name="color" value="2" /><label
                        for="color-two"
                        >2</label
                        >
                    </li>
                    <li>
                        <input onChange={updateSurveyDetails} checked={props.survey.color === "3"} id="color-three" type="radio" name="color" value="3" /><label
                        for="color-three"
                        >3</label
                        >
                    </li>
                    <li>
                        <input onChange={updateSurveyDetails} checked={props.survey.color === "4"} id="color-four" type="radio" name="color" value="4" /><label
                        for="color-four"
                        >4</label
                        >
                    </li>
                </ul>
            </div>
            <div class="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label
                        ><input
                            // checked={props.survey.spendTime}
                            onChange={updateSurveyDetails} checked={props.survey.spendTime === "swimming"}
                            name="spendTime"
                            type="checkbox"
                            value="swimming"
                        />Swimming</label
                        >
                    </li>
                    <li>
                        <label
                        ><input onChange={updateSurveyDetails} checked={props.survey.spendTime === "bathing"} name="spendTime" type="checkbox" value="bathing" />Bathing</label
                        >
                    </li>
                    <li>
                        <label
                        ><input
                            onChange={updateSurveyDetails} checked={props.survey.spendTime === "chatting"}
                            name="spendTime"
                            type="checkbox"
                            value="chatting"
                        />Chatting</label
                        >
                    </li>
                    <li>
                        <label
                        ><input onChange={updateSurveyDetails} checked={props.survey.spendTime === "noTime"} name="spendTime" type="checkbox" value="noTime" />I don't like to
                        spend time with it</label
                        >
                    </li>
                </ul>
            </div>
            <label
                >What else have you got to say about your rubber duck?<textarea
                onChange={updateSurveyDetails} value={props.survey.review}
                name="review"
                cols="30"
                rows="10"
                ></textarea></label
            ><label
                >Put your name here (if you feel like it):<input
                onChange={updateSurveyDetails} value={props.survey.username}
                type="text"
                name="username" /></label
            ><label
                >Leave us your email pretty please??<input
                onChange={updateSurveyDetails} value={props.survey.email}
                type="email"
                name="email" /></label
            ><input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )   
}