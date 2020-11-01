const PRODUCTS = '_PRODUCTS';


export function ValidationError(errors) {
    this.errors = errors
}

class ProductService {
    
    validate = (product) => {
        const errors = []

        if(!product.name) {
            errors.push('O campo Nome é obrigatório.')
        }

        if(!product.sku) {
            errors.push('O campo SKU é obrigatório.')
        }

        if(!product.price || product.price <= 0) {
            errors.push('O campo Preço deve ter um valor maior que zero(0).')
        }

        if(!product.provider) {
            errors.push('O campo Fornecedor é obrigatório.')
        }

        if(errors.length > 0) {
            throw new ValidationError(errors)
        }
    }

    save = (product) => {

        this.validate(product)

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