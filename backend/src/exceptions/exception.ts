class ExceptionWithMessage extends Error {
  message: string
  code: number
  constructor(message: string, code: number) {
    super(message)
    this.message = message
    this.code = code
  }

  toResponse() {
    return {
      message: this.message,
      code: this.code
    }
  }
}