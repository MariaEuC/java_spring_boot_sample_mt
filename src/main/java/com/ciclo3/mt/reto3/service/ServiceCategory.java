package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Category;
import com.ciclo3.mt.reto3.repository.RepositoryCategory;

@Service
public class ServiceCategory {

    @Autowired
    private RepositoryCategory repositoryCategory;

    public List<Category> getAll() {
        return repositoryCategory.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return repositoryCategory.getCategory(id);
    }

    public Category save(Category category) {
        if (category.getId() == null) {
            return repositoryCategory.save(category);
        } else {
            Optional<Category> category_1 = repositoryCategory.getCategory(category.getId());
            if (category_1.isPresent()) {
                return category;
            } else {
                return repositoryCategory.save(category);
            }
        }
    }
}
