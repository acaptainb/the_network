export class Post {
    constructor(data) {
        this.id = data.id
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.likeIds = data.likeIds
        this.likes = data.likes
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }
}

// {
//     "_id": "665ba61e25b953eae8e75b2b",
//     "body": "True Love Is Timless",
//     "imgUrl": "https://images.unsplash.com/photo-1579273175840-512f9e43f993?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "creatorId": "660c61b896ed0ef3aabf8758",
//     "likeIds": [],
//     "createdAt": "2024-06-01T22:52:14.969Z",
//     "updatedAt": "2024-06-01T22:52:14.969Z",
//     "__v": 0,
//     "creator": {
//       "_id": "660c61b896ed0ef3aabf8758",
//       "subs": [
//         "auth0|660c61b82f2e4a68b06525a1"
//       ],
//       "email": "dodo@dodo.com",
//       "name": "dodo",
//       "picture": "https://www.shutterstock.com/image-vector/dodo-raphus-cucullatus-vintage-engraving-600nw-77548981.jpg",
//       "bio": "",
//       "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//       "github": "",
//       "linkedin": "",
//       "resume": "",
//       "class": "",
//       "graduated": false,
//       "createdAt": "2024-04-02T19:51:34.318Z",
//       "updatedAt": "2024-04-22T17:14:26.846Z",
//       "__v": 0,
//       "id": "660c61b896ed0ef3aabf8758"
//     },
//     "likes": [],
//     "id": "665ba61e25b953eae8e75b2b"
//   }