import ChatView from '../chat-view/chat-view';
import withContext from '../../hoc/with-context';
import { ChatConsumer } from '../../context-api/chat-context';

const toProps = (value) => {

    const { user, allMessages, admin, handleSubmit } = value;

    return {
        mainAva: admin.ava ,
        name: admin.name ,
        messages: allMessages ,
        secondAva: user.ava ,
        isAdmin: admin.isAdmin ,
        position: admin.position ,
        handler :  handleSubmit 
    }
}
export default withContext(toProps, ChatConsumer)(ChatView);