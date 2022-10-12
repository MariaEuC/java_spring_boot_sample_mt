package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Score;
import com.ciclo3.mt.reto3.repository.RepositoryScore;

@Service
public class ServiceScore {

    @Autowired
    private RepositoryScore repositoryScore;

    public List<Score> getAll() {
        return repositoryScore.getAll();
    }

    public Optional<Score> getScore(int id) {
        return repositoryScore.getScore(id);
    }

    public Score save(Score score) {
        if (score.getIdScore() == null) {
            return repositoryScore.save(score);
        } else {
            Optional<Score> score_1 = repositoryScore.getScore(score.getIdScore());
            if (score_1.isPresent()) {
                return score;
            } else {
                return repositoryScore.save(score);
            }

        }
    }

}
