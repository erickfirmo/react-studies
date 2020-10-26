const PRODUCTS = '_PRODUCTS';

class ProductService {
    
    save = (product) => {
        let products = localStorage.getItem(PRODUCTS)

        if(!products) {
            products = []
        } else {
            products = JSON.parse(products)
        }

        products.push(product)

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }

}

export default ProductService