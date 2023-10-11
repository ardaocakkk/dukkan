package com.pancarte.ecommerce.controller;

import com.pancarte.ecommerce.model.Product;
import com.pancarte.ecommerce.model.Store;
import com.pancarte.ecommerce.model.StoreDetails;
import com.pancarte.ecommerce.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/store")
public class StoreController {
    @Autowired
    private StoreService storeService;

    @GetMapping(value = "")
    public List<Store> getAllStores() {
        return storeService.getAllStores();
    }

    @GetMapping(value = "/{id}")
    public Store getStoreByID(@PathVariable int id) {
        System.out.println(storeService.getStoreByID(id));
        return storeService.getStoreByID(id);
    }

    @PostMapping(value = "/add")
    public Store addStoreToDB(@RequestBody Store theStore) {
        return storeService.addStoreToDB(theStore);
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteStoreByID(@PathVariable int id) {
        return storeService.deleteStoreByID(id);
    }

    @PostMapping(value = "/{id}/addProduct")
    public Store addProductToStore(@PathVariable int id, @RequestBody Product product) {
        return storeService.addProductToStore(id, product);
    }

    @PostMapping(value = "/{id}/StoreDetails")
    public Store addStoreDetails(@PathVariable int id, @RequestBody StoreDetails storeDetails) {
        return storeService.addStoreDetails(id, storeDetails);
    }


}
