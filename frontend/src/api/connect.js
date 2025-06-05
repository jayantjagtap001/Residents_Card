import axios from "axios";

const connectbackend =axios.create({
    baseURL:"https://residents-card.onrender.com"
})


export default connectbackend;