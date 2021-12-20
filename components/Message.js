import { useMoralis } from "react-moralis";

function Message({ message }) {


    return (
        <div>
            <p>{message.get("message")}</p>
        </div>
    );
}

export default Message;
