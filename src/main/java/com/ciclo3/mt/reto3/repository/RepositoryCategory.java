package com.ciclo3.mt.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ciclo3.mt.reto3.model.Category;
import com.ciclo3.mt.reto3.repository.crud.CrudRepositoryCategory;

@Repository
public class RepositoryCategory {

    @Autowired
    private CrudRepositoryCategory crudRepositoryCategory;

    public List<Category> getAll() {
        return (List<Category>) crudRepositoryCategory.findAll();
    }

    public Optional<Category> getCategory(int id) {
        return crudRepositoryCategory.findById(id);
    }

    public Category save(Category category) {
        return crudRepositoryCategory.save(category);
    }

    // public void delete (Category category){
    // categoryCrudRepository.delete(category);
    // }

}
