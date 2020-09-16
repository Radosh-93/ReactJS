import React, {Fragment} from "react";

const FancyBorder = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

const Dialog = (props) => {
    return(
      <Fragment>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
      </Fragment>
    )
}

 export const WelcomeDialog = (props) => {
    return(
        <FancyBorder>
            <Dialog title='Welcome' description='Thanks for visited our space ship'/>
        </FancyBorder>
    )
}
/*Если нужно несколько мест для вставки Children*/

const SplitPane = (props) => {
    return(
        <div>
            <div>{props.left}</div>
            <div>{props.right}</div>
        </div>

    )
}
const Contacts = () => (
    <h3>Contacts</h3>
)
const Chat = () => (
    <h3>Chat</h3>
)
export const CompositionApp = () => {
    return(
        <SplitPane left={<Contacts/>} right={<Chat/>}/> //в пропсы можна передавать вызов компоненты
    )
}
