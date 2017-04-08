export class Campaign {
  constructor(public id, public name: string, public subject: string, public status: string, public date: Date,
              public open: number, public clicks: number, public emailSent: number, public fromUser,
              public selected = false) {}
}
