export default (posts=[],action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
            //output of map() function is an array!
        case "CREATE":
            return [...posts,action.payload];
        case "UPDATE":
            return posts.map((post) => post._id === action.payload._id? action.payload:post);
        case "DELETE":
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}