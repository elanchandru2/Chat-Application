import React, { useState, useEffect } from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import './styles.css'; // Assuming you have a separate CSS file for styling

const ChatsPage = (props) => {
        const chatProps = useMultiChatLogic('5ffe3549-cf6b-4945-95ef-c221058037b4',props.user.username,props.user.secret)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay for demonstration purposes
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout as needed

        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <p>
                    <div className="loading-spinner"></div>
                </p>
            </div>
        );
    }

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
            
        </div>
    );
};

export default ChatsPage;
