import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import {useEffect, useState} from 'react'
import { NewTransactionModal } from './components/NewTransactionModal';
import {TransactionsProvider } from './hooks/useTransactions';

const Title = styled.h1`
font-size: 64px;
color: #8257e6;
`
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

 

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }



  return (
    <TransactionsProvider>
     
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
     <NewTransactionModal
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}
     />
      <GlobalStyle />
 
      </TransactionsProvider>
  );
}
