const createNamesElements = (props) => {
    console.log(props);
    // return props.namesArr.map((name) => {return <h2>{name}</h2>})
}

const Names = () => {
    
    return (
        <div>{createNamesElements()}</div>
    )
}

export default Names