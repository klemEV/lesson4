import React, {useState} from 'react';

const ChatsPage = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Ash'
        }
    ]);
    return (
        <div>
            {chats.map((chat) => {
                return(
                    <Link to={'/messages/${chat.id}'} key={chat.id}>
                        {chat.name}
                    </Link>
                )
            })}
        </div>
    );
};

export default ChatsPage;