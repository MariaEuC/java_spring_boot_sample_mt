package com.ciclo3.mt.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ciclo3.mt.reto3.model.Client;
import com.ciclo3.mt.reto3.repository.crud.CrudRepositoryClient;

@Repository
public class RepositoryClient {

    @Autowired
    private CrudRepositoryClient crudRepositoryClient;

    public List<Client> getAll() {
        return (List<Client>) crudRepositoryClient.findAll();
    }

    public Optional<Client> getClient(int idClient) {
        return crudRepositoryClient.findById(idClient);
    }

    public Client save(Client client) {
        return crudRepositoryClient.save(client);
    }

}
