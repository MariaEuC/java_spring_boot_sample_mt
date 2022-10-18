package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Partyroom;
import com.ciclo3.mt.reto3.repository.RepositoryPartyroom;

@Service
public class ServicePartyroom {
    @Autowired
    private RepositoryPartyroom repositoryPartyroom;

    public List<Partyroom> getAll() {
        return repositoryPartyroom.getAll();
    }

    public Optional<Partyroom> getPartyroom(int id) {
        return repositoryPartyroom.getPartyroom(id);
    }

    // public Partyroom save(Partyroom partyroom) {
    // if (partyroom.getId() == null) {
    // return repositoryPartyroom.save(partyroom);
    // } else {
    // Optional<Partyroom> partyroom_1 =
    // repositoryPartyroom.getPartyroom(partyroom.getId());
    // if (partyroom_1.isPresent()) {
    // return partyroom;
    // } else {
    // return repositoryPartyroom.save(partyroom);
    // }
    // }
    // }
    public Partyroom save(Partyroom partyroom) {
        if (partyroom.getId() == null) {
            return repositoryPartyroom.save(partyroom);
        } else {
            Optional<Partyroom> partyroom1 = repositoryPartyroom.getPartyroom(partyroom.getId());
            if (partyroom1.isEmpty()) {
                return repositoryPartyroom.save(partyroom);
            } else {
                return partyroom;
            }
        }
    }
}
