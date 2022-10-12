package com.ciclo3.mt.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ciclo3.mt.reto3.model.Score;
import com.ciclo3.mt.reto3.repository.crud.CrudRepositoryScore;

@Repository
public class RepositoryScore {

    @Autowired
    private CrudRepositoryScore crudRepositoryScore;

    public List<Score> getAll() {
        return (List<Score>) crudRepositoryScore.findAll();
    }

    public Optional<Score> getScore(int id) {
        return crudRepositoryScore.findById(id);
    }

    public Score save(Score score) {
        return crudRepositoryScore.save(score);
    }

}
