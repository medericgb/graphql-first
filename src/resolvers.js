import { users } from "../db";

const messageHello = "Salut les amis !"

// Resolver => Query => Get method
// Mutation => Post, Put, Delete methods
const resolvers = {
    Query: {
        hello: (parent, args, context, info) => messageHello,
        users: () => users,
        user: (parent, { id }) => users.find(user => user.id == id)
    },
    Mutation: {
        // Create an user
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
        // Delete an user
        deleteUser: (parent, { id }) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID != -1) {
                users.splice(checkID, 1)
                return true
            } else {
                throw new Error('Unknown ID')
            }
        },
        // Update an user
        updateUser: (parent, { id, name, email, age }) => {
            let newUser = users.find(user => user.id == id)
            newUser.name = name
            newUser.email = email
            newUser.age = age
            return newUser
        }
    }
};

export default resolvers;
