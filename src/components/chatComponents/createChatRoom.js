

const CreateChatRoom = ({userData,currentlyViewing,currentChatRoom}) => {
    const reObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          chatroom: {
            user1_id: userData.id,
            user2_id: currentlyViewing.id,
            name: currentChatRoom,
          },
        }),
      };
  return(
    fetch(`https://astro-connection.herokuapp.com/api/v1/chat_rooms`, reObj)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('we got a chat room', data);
      })
)
  };
  export default CreateChatRoom