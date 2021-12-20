import { useMoralis } from 'react-moralis';
import { useState } from 'react';

function SendMessages() {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) return;
        const Messages = Moralis.Object.extend('Messages');
        const message = new Messages();

        message.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.getEthAddress(),
        }).then((message) => {
            // console.log(message);
        },
            (error) => {
                console.log(error.message);
            }
        )
    }

    return (
        <form className='flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400'>
            <input
                className='outline-none bg-transparent text-white placeholder-gray-500'
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Enter a Message ${user.getUsername()}`}
            />
            <button type="'submit" onClick={sendMessage} className='font-bold text-pink-500'>send</button>
        </form>

    )
}

export default SendMessages
