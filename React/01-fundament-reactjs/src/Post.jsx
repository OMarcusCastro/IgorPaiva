function Post(props){
   
    return(
        <div>

            <h2>Post</h2>
            <h3>author:{props.auth}</h3>
            <p>{props.content}</p>

        </div>
    )
}

export default Post