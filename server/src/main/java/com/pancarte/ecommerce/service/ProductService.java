package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product addProduct(Product theProduct) {
        return productRepository.save(theProduct);
    }

    public Product updateProduct(Product theProduct) {
        Product existingProduct = productRepository.findById(theProduct.getId()).orElse(null);
        existingProduct.setTitle(theProduct.getTitle());
        existingProduct.setPrice(theProduct.getPrice());
        existingProduct.setQuantity(theProduct.getQuantity());
        return productRepository.save(existingProduct);
    }

    public String deleteProductById(int id) {
        productRepository.deleteById(id);
        return "Product Removed";
    }


}
