

// function for add product
const addProduct = async (req, res) => {
    try {
        const {name,description,price,category,subcategory,sizes,bestseller} = req.body
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name,description,price,category,subcategory,sizes,bestseller);
        console.log(image1,image2,image3,image4);
        
        
    } catch (error) {
        
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