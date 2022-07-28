export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Java®: Como Programar", preco: 360.00, descricaoPreco: "À vista no PIX", imagem: "./assets/978-8543004792.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Java - Guia do Programador", preco: 110.00, descricaoPreco: "À vista no PIX", imagem: "./assets/978-6586057577_.jpg", quantidadeEstoque: 14 },
    { id: 3, descricao: "Head First Java", preco: 149.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B0B2HPDDGF.jpg", quantidadeEstoque: 12 },
    { id: 4, descricao: "OCP Study Guide", preco: 400.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B09WJP11JL.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Sistemas Orientados a Objetos", preco: 90.00, descricaoPreco: "À vista no PIX", imagem: "./assets/978-6588431412.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Core Java, Volume I", preco: 350.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B09GXR6SPF.jpg", quantidadeEstoque: 8 },
    { id: 7, descricao: "Angular Cookbook", preco: 200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B08VTWYJ7H.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Angular Projects", preco: 300.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B08XXNBKNP.jpg", quantidadeEstoque: 13 },
    { id: 9, descricao: "Learning Angular", preco: 400.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B08D9SLQ1X.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "TypeScript para iniciantes", preco: 90.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B098BPZYND.jpg", quantidadeEstoque: 7 },
    { id: 11, descricao: "Mastering TypeScript", preco: 410.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B091D7P533.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Full-Stack Web Development", preco: 150.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B09KCQ5642.jpg", quantidadeEstoque: 2 },
    { id: 13, descricao: "Arquitetura limpa", preco: 90.00, descricaoPreco: "À vista no PIX", imagem: "./assets/978-8550804606.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "O codificador limpo", preco: 70.00, descricaoPreco: "À vista no PIX", imagem: "./assets/978-8576086475.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Clean Code", preco: 300.00, descricaoPreco: "À vista no PIX", imagem: "./assets/B001GSTOAM.jpg", quantidadeEstoque: 10 },
]