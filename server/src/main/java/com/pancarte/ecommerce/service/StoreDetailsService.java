package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.Store;
import com.pancarte.ecommerce.model.StoreDetails;
import com.pancarte.ecommerce.repository.StoreDetailsRepository;
import com.pancarte.ecommerce.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class StoreDetailsService {

    @Autowired
    private StoreDetailsRepository storeDetailsRepository;

    @Autowired
    private StoreRepository storeRepository;


    public StoreDetails getStoreDetailsById(int id) {
        return storeDetailsRepository.findById(id).orElse(null);
    }

    public Store addStoreDetails(StoreDetails theStoreDetails) {
        return storeRepository.save(theStoreDetails.getStore());
    }


}
