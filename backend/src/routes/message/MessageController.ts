import {Request, Response} from 'express'
import messageServiceInstance, {MessageService} from "@/services/MessageService";


class MessageController {

  messageService: MessageService
  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  getList(req: Request, res: Response) {
    return res.json({ok: true})
  }

  create(req: Request, res: Response) {
    return res.json({ok: true})
  }

  delete(req: Request, res: Response) {
    return res.json({ok: true})
  }
}

export default new MessageController(messageServiceInstance)