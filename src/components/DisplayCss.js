const DisplayCss = (props) => {
    const headerStyle = {
        color: props.color,
        backgroundColor: props.bcColor

    }
    return <h1 style={headerStyle}>{props.text}</h1>;
}

export default DisplayCss;