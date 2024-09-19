import {MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const username = props.user.username;
    const secret = props.user.secret;
    
    const chatID = "d5c882ae-bcbd-4bae-8c36-b2d43ab9e878";  

    const chatProps = useMultiChatLogic(chatID, username, secret);

    return (
    
    <div style = {{height: "100vh"}}> 

        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height: '100%'}}/>

    </div>

)};


export default ChatsPage;

