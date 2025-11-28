import express, {type Request, type Response} from 'express';

const app = express();

interface Iproducts {
    id: number;
    name: string;
    price: number;
    description?: string;
    address: object;

}

let produts: Iproducts[] = []

app.get('/produtos', (req:Request, res:Response) => {

    const newProduct = 
    produts.push ({
        id: Math.random(),
        name: "Queijo",
        price: 20,
        description: "Sabor Otimo",
        address:{
            street: "Rua queijos",
            number: 0 ,
            state: "SP"
}
})

    produts.push(newProduct)

    return res.json(produts)
})

app.listen(3000, () => {
    console.log('TYPERSCRIPT bom')
})