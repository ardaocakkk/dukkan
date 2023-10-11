package com.pancarte.ecommerce.service;

import com.pancarte.ecommerce.model.User;
import com.pancarte.ecommerce.repository.AddressRepository;
import com.pancarte.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    public String deleteAddressById(int id) {
        User user = userRepository.findById(id).orElse(null);
        user.setAddress(null);
        addressRepository.deleteById(id);
        return "Address Removed";
    }

}
