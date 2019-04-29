import ChatView from '../chat-view/chat-view';
import withContext from '../../hoc/with-context';
import { ChatConsumer } from '../../context-api/chat-context';

const toProps = (value) => {

    const { user, allMessages, admin, handleSubmit } = value;

    return {
        mainAva: user.ava ,
        name: user.name ,
        messages: allMessages ,
        secondAva: admin.ava ,
        isAdmin: user.isAdmin ,
        position: user.position ,
        handler :  handleSubmit 
    }
}

export default withContext(toProps, ChatConsumer)(ChatView);