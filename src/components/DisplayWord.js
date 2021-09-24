const DisplayWord = (props) => {
    if (isNaN(props.word)) {
        return (<h1>The word is:{props.word}</h1>)
    } else {
        return (<h1>The number is : {props.word}</h1>)
    }

}

export default DisplayWord;