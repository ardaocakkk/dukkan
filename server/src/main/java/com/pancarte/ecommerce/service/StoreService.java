package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.Store;
import com.pancarte.ecommerce.model.StoreDetails;
import com.pancarte.ecommerce.repository.ProductRepository;
import com.pancarte.ecommerce.repository.StoreDetailsRepository;
import com.pancarte.ecommerce.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {
    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private StoreDetailsRepository storeDetailsRepository;


    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    public Store getStoreByID(int id) {
        return storeRepository.findById(id).orElse(null);
    }

    public Store addStoreToDB(Store theStore) {
        return storeRepository.save(theStore);
    }

    public String deleteStoreByID(int id) {
        storeRepository.deleteById(id);
        return "Store Removed";
    }

    public Store addProductToStore(int id, Product product) {
        Store store = storeRepository.findById(id).orElse(null);
        product.setStore(store);
        assert store != null;
        store.getProducts().add(product);
        productRepository.save(product);
        return storeRepository.save(store);
    }

    public Store addStoreDetails(int id, StoreDetails storeDetails) {
        Store store = storeRepository.findById(id).orElse(null);
        storeDetails.setStore(store);
        assert store != null;
        store.setStoreDetails(storeDetails);
        storeDetailsRepository.save(storeDetails);
        return storeRepository.save(store);
    }


}
