import React from 'react'
import './Message.css';
import { Avatar } from '@material-ui/core'; 
/*  to be written in timestamp {new Date(timestamp?. toDate().toUTCString())}
{user.displayName}
*/
function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E35AQEvpRD9Xaj3aw/profile-framedphoto-shrink_400_400/0?e=1602993600&v=beta&t=bHSxCoJzGaz9EKoR46764IatPmcEpsmHsrgb5Bce260" />

            <div className="message__info">
                <h4> Dead_Deed
                    <span className="message__timestamp">this is a timestamp </span>

                </h4>
                <p> {message}</p>
            </div>
        </div>
    )
}

export default Message;
