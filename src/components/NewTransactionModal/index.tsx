import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Botão - Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
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
            <button
            type="button"
            ><img src={incomeImg} alt="" />
            <span>Entrada</span>
            </button>

            <button
            type="button"
            ><img src={outcomeImg} alt="" />
            <span>Saída</span>
            </button>
        </TransactionTypeContainer>

        
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
    );
}