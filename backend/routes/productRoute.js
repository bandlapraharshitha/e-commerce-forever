import express from "express"
import { listProducts, addProduct, removeProduct, singleProduct } from "../controllers/productController"
import upload from "../middleware/multer";

const productRouter = express.Router();

productRouter.post('/add',upload.fields(),addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/add',listProducts);

export default productRouter