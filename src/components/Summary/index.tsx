import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

import { Container } from "./styles";

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="" />
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$1.000.000,00</strong>
            </div>
        </Container>
    )
}