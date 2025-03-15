import '../App.css'

export default function Operation(props){
    return (
        <p>Operation: <button id='first-operand'>{props.firstOperand}</button> <button id='operator'>{props.operator}</button> <button id='second-operand'>{props.secondOperand}</button></p>
    )
}