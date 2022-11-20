const { gql } = require("apollo-server");

exports.typeDef = gql`
  type Query {
    buoy: Buoy!
    buoys: [Buoy!]!
  }
  type Buoy {
    id: ID
    name: String
    wind: Int
    date: String
    time: String
    data: [Data]
    CO2: CO2
    Tide: Tide
    lat: Float
    lng: Float
  }
  type Data {
    id: ID
    name: String
    value: Float
  }
  type CO2 {
    data: [Int]
    categories: [String]
  }
  type Tide {
    data: [Float]
    categories: [String]
  }
`;