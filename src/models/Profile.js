export class Profile {
    constructor(data) {
        this.id = data.id || data._id
        this.name = data.name
        this.picture = data.picture
        this.bio = data.bio
        this.coverImg = data.coverImg
        this.linkedin = data.linkedin
        this.graduated = data.graduated
        this.github = data.github
        this.class = data.class
    }
}