import Imagem from './Imagem';
const imagens = [
    'https://catracalivre.com.br/wp-content/uploads/2018/06/moana.jpg',
    'https://i.pinimg.com/736x/4e/18/99/4e18999de38fc38fbff8eec3a250b317.jpg',
    'https://i.pinimg.com/originals/df/44/e0/df44e05a78b65f1de1d3c6a5403848e4.jpg',
    'https://i.pinimg.com/originals/cc/5b/a6/cc5ba661ead2e23d39be0c72ee79b019.jpg',
    'https://i.pinimg.com/474x/42/59/c4/4259c42ad9927e509a7992d9cfb10848.jpg',
    'https://i.pinimg.com/736x/20/1c/71/201c7162fc735e19b49fc840e182cf80.jpg',
];

function Galeria() {
    return(
        <div className="galeria">
            {imagens.map((url, index) => (
                <Imagem key={index} url={url}/>
            ))}
        </div>
    )
}


export default Galeria;