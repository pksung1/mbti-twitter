import messageServiceInstance, {MessageService} from "services/MessageService";


class MessageController {

  messageService: MessageService
  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  getList(req: Request, res: Response) {}

  create(req: Request, res: Response) {}

  delete(req: Request, res: Response) {}
}

export default new MessageController(messageServiceInstance)