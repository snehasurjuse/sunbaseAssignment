package com.example.sunbaseAssignment.repository;

import com.example.sunbaseAssignment.model.Customer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Page<Customer> findByFirstNameContainingOrCityContainingOrEmailContainingOrPhoneContaining(String firstName, String city, String email, String phone, Pageable pageable);
    @Query("SELECT c FROM Customer c WHERE c.email = :email")
    Optional<Customer> findByEmail(String email);
}
