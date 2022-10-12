package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Client;
import com.ciclo3.mt.reto3.repository.RepositoryClient;

@Service
public class ServiceClient {

    @Autowired
    private RepositoryClient repositoryClient;

    public List<Client> getAll() {
        return repositoryClient.getAll();
    }

    public Optional<Client> getClient(int idClient) {
        return repositoryClient.getClient(idClient);
    }

    public Client save(Client client) {
        if (client.getIdClient() == null) {
            return repositoryClient.save(client);
        } else {
            Optional<Client> client_1 = repositoryClient.getClient(client.getIdClient());
            if (client_1.isPresent()) {
                return client;
            } else {
                return repositoryClient.save(client);
            }
        }
    }

}
