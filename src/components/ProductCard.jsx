import styled from "styled-components"

export default function ProductCard(){
    const data = [
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        },
        {
            _id: 0,
            company: "empresa",
            title: "titulo",
            price: 100
        }
    ]

    return(<>{
        data.map((product, id) => (
        <ProductCardSC key={id}>
            <img src="https://images.kabum.com.br/produtos/fotos/147962/headset-gamer-hyperx-cloud-blue-ps4-hhsc2-fa-bl-n_1613658279_gg.jpg" 
            alt="product"/>
            <div>
                <h2>{product.company}</h2>
                <h1>{product.title}</h1>
                <span>{product.price.toLocaleString('pt-br', {
                    style: "currency",
                    currency: "BRL",
                })}</span>
            </div>
            <button>Adicionar ao carrinho</button>
        </ProductCardSC>
        ))
    }</>)
}

const ProductCardSC = styled.div`

    margin-bottom: 30px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
    img{
        width: 100%;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        padding-bottom: 0px;
        h2{
            font-family: Roboto;
            margin-bottom: 20px;
            color: #9c9c9c;
            font-size: 15px;
        }
        h1{
            font-family: Bebas Neue;
            margin-bottom: 20px;
            color: #000000;
            font-size: 25px;
        }
        span{
            font-family: Bebas Neue;
            margin-bottom: 20px;
            color:  #ff002b;
            font-size: 22px;
        }
    }
    button{
        background-color: #000000;
        color: white;
        border: 0px;
        border-radius: 5px;
        padding: 10px 0px;
        width: 150px;
        font-weight: 400;
        cursor: pointer;
        margin-bottom: 20px;
    }
`