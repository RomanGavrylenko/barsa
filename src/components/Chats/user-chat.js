import withChatContext from '../../hoc/with-chat-context';
import ChatView from '../chat-view/chat-view';

//чат для пользователя
export default withChatContext(false)(ChatView);