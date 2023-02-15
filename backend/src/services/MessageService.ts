import messageRepositoryInstance, {MessageRepository} from "repositories/MessageRepository"

export class MessageService {

  messageRepository: MessageRepository
  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository
  }

  getList() {}

  create() {}

  delete() {}
}

export default new MessageService(messageRepositoryInstance)