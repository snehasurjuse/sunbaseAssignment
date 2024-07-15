/*
package com.example.sunbaseAssignment.service;

import com.example.sunbaseAssignment.model.Customer;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class RemoteAPIService {

    private final RestTemplate restTemplate = new RestTemplate();

    public List<Customer> fetchCustomers() {
        String remoteApiUrl = "http://localhost:8080/api/customers"; // Replace with the actual URL
        Customer[] remoteCustomers = restTemplate.getForObject(remoteApiUrl, Customer[].class);
        if (remoteCustomers != null) {
            System.out.println("Fetched customers: " + Arrays.toString(remoteCustomers));
        } else {
            System.out.println("No customers fetched");
        }
        return Arrays.asList(remoteCustomers);
    }
}

 */

