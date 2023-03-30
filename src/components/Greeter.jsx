const Greeter = props => {
    return (
        <div>{props.greeting || "Hello"} {props.person}!</div>
    )
}

export default Greeter