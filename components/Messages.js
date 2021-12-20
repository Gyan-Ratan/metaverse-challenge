import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
// import SendMessage from "./SendMessages";

// Only show messages from the last 15  minutes
const MINS_DURATION = 15;
function Messages() {
    const { user } =useMoralis();
    // const endOfMessagesRef = userRef(null);
    const { data ,loading, error } =useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan
        ('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION))
        ,
        [],
        {
            live: true,
        }
    );

    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight : "auto"}}
                />
            </div>

            <div>
                {/* Each Messages */}
            </div>
            
            <div className="flex justify-center">
                {/* <SendMessage /> */}
            </div>

            <div className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
        </div>
    );
}

export default Messages;
