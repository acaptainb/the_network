export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.linkedin = data.linkedin
    this.graduated = data.graduated
    this.github = data.github
    this.class = data.class
    // TODO add additional properties if needed
  }
}
