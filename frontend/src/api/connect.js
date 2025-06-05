import axios from "axios";

const connectbackend =axios.create({
    baseURL:"http://localhost:9090"
})


export default connectbackend;