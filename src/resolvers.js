let users = [
    {id: 1, name: "Jean", email: "jean@mail.com", age: 17},
    {id: 2, name: "Rose", email: "rose@mail.com", age: 31},
    {id: 3, name: "Mario", email: "mario@mail.com", age: 25}
]

const messageHello = "Bonjour le monde"

const resolvers = {
    Query: {
        hello: (parent, args, context, info) => messageHello,
        users: () => users,
        user: (parent, { id }) => users.find(user => user.id == id)
    },
    Mutation: {
        createUser: (parent, { id, name, email, age }) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID == -1) {
                let newUser = { id, name, email, age }
                users.push(newUser)
                return newUser
            } else {
                throw new Error('ID already exist!')
            }
        },
        deleteUser: (parent, { id }) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID != -1) {
                users.splice(checkID, 1)
            let checkID = users.findIndex(user => user.id == id)
                return true
            } else {
                throw new Error('Unknown ID')
            }
        }
    }
};

export default resolvers;
