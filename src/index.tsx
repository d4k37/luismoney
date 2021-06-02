import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs';


createServer({ 
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Lucro em Bitcoin',
          type: 'deposit',
          category: 'Cripto',
          amount: 1000000,
          createdAt: new Date('2021-08-08 15:30:05'),
        },

        {
          id: 2,
          title: 'Gasto com putas',
          type: 'withdraw',
          category: 'Insumos',
          amount: 50,
          createdAt: new Date('2021-08-09 20:10:57'),
        },
      ],
    })

  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
