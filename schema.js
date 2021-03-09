const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
        hotel_id: Int!
        hotel_name: String!
        email: String!
        city: String!
        postal_code: String!
        street: String!
        price: Float!
   }
   type Booking {
       user_id: Int!
        hotel_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
    }
    type User {
        user_id: ID!
        email: String!
        username: String!
        password: String!
    }
   type Query {
        getHotel: [Hotel]
        getBooking: [Booking]
        getHotelByCity(city: String!): [Hotel]
        getHotelByName(name: String!): [Hotel]
        getUser: [User]
   }

   type Mutation {
        addHotel(hotel_id: Int!
            hotel_name: String!
            street: String!
            price: Float!
            city: String!
            postal_code: String!
            email: String!): Hotel

        addUser(user_id: Int!
            username: String!
            password: String!
            email: String!): User

        addBooking(hotel_id: Int!
            user_id: Int!
            booking_end: String!
            booking_date: String!
            booking_start: String!): Booking
   }
`