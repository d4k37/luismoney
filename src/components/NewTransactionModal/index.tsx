import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/Botão - Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [type, setType] = useState('deposit');


    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
    <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título"/>
        <input type='number' placeholder="Valor"/>

        <TransactionTypeContainer>
            <RadioBox
            type="button"
            className={type == 'deposit' ? 'active' : ''}
            onClick={() =>{setType('deposit')}}
            isActive={type == 'deposit'}
            ><img src={incomeImg} alt="" />
            <span>Entrada</span>
            </RadioBox>

            <RadioBox
            type="button"
            onClick={() =>{setType('withdraw')}}
            isActive={type == 'withdraw'}
            ><img src={outcomeImg} alt="" />
            <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>

        
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
    );
}