import { useState } from 'react'
import logoImg from '../../assets/logo.png'
import Modal from 'react-modal'
import { Container, Content } from './styles'


interface HeaderProps {
    onOpenNewTransactionModal: ()=> void;
}


export function Header({onOpenNewTransactionModal}: HeaderProps){

  return(
        <Container>
            <Content>
            <img src={logoImg} alt="luis money" className=""/>
           
            <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            
            </Content>
        </Container>
    )
}

