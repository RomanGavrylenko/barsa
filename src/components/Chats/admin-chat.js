import withChatContext from '../../hoc/with-chat-context';
import ChatView from '../chat-view/chat-view';

//чат для администратора
export default withChatContext(true)(ChatView);