

// function for add product
const addProduct = async (req, res) => {
    try {
        const {name,description,price,category,subcategory,sizes,bestseller} = req.body
    } catch ( error ) {
        
    }
}

// function for list product
const listProducts = async (req, res) => {
    
}

// function for remove product
const removeProduct = async (req, res) => {
    
}

// function for single product info
const singleProduct = async (req, res) => {
    
}

export {listProducts,addProduct,removeProduct,singleProduct}