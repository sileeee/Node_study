const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
        id: ID! 
        name: String
        price: Int
        description : String
    }

    type Query {
        getProduct ( id: ID! ): Product
    }
`); // !는 필수

// 임시 제품 데이터
const products = [{
    id: 1,
    name: '첫번째 제품',
    price: 2000,
    description : "하하하"
},{
    id: 2,
    name: '두번째 제품',
    price: 1200,
    description : "호호호"
}]

//쿼리 작성 (인자로 id를 받으면 해당 id에 일치하는 product한줄을 가져옴)
const root = { 
    getProduct : ({id}) => products.find( product => product.id === parseInt(id) ) ,
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});  

// GraphiQL이나 Postman에서 
// { getProduct(id : 1){
//     name
//     price
// }}
// 입력하여 해당 제품의 정보 출력받을 수 있음