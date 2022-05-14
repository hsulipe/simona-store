import styles from './styles.scss'
import generateProduct from './db/products'

export function App() {
  const products = generateProduct(20)

  return (
    <>
      <header className="header">
        <h1>Beth Store</h1>
      </header>
      <div className="content">
      {
          products.map(product => {
            return (
              <div className="product">
                <img
                  src={product.image}
                />
                <h2>{product.name}</h2>
                <p><label>Descrição: </label>{product.description}</p>
                <p><label>Marca: </label>{product.brand}</p>
                <p><label>Modelo: </label>{product.model}</p>
                <p><label>Quantidade: </label>{product.quantity}</p>
                <p><label>Departamento: </label>{product.department}</p>
                <p><label>Preço: </label><b>R$ {product.price}</b></p>
                <p><label>Categoria: </label>{product.category}</p>
                <p><label>Tamanho: </label>{product.technical_details.height} X {product.technical_details.width} X {product.technical_details.depth}</p>
                <p><label>Informações técnicas: </label>{product.technical_details.adicional_data}</p>
              </div>)
          })
        }
      </div>
    </>
  )
}
