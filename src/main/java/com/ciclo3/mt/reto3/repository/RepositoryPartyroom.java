package com.ciclo3.mt.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.ciclo3.mt.reto3.model.Partyroom;
import com.ciclo3.mt.reto3.repository.crud.CrudRepositoryPartyroom;

@Repository
public class RepositoryPartyroom {

    @Autowired
    private CrudRepositoryPartyroom crudRepositoryPartyroom;

    public List<Partyroom> getAll() {
        return (List<Partyroom>) crudRepositoryPartyroom.findAll();
    }

    public Optional<Partyroom> getPartyroom(int id) {
        return crudRepositoryPartyroom.findById(id);
    }

    public Partyroom save(Partyroom partyroom) {
        return crudRepositoryPartyroom.save(partyroom);
    }

}
