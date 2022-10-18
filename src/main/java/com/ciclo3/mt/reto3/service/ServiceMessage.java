package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Message;
import com.ciclo3.mt.reto3.repository.RepositoryMessage;

@Service
public class ServiceMessage {

    @Autowired
    private RepositoryMessage repositoryMessage;

    public List<Message> getAll() {
        return repositoryMessage.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return repositoryMessage.getMessage(id);
    }

    // public Message save(Message message) {
    // if (message.getIdMessage() == null) {
    // return repositoryMessage.save(message);
    // } else {
    // Optional<Message> message_1 =
    // repositoryMessage.getMessage(message.getIdMessage());
    // if (message_1.isPresent()) {
    // return message;
    // } else {
    // return repositoryMessage.save(message);
    // }
    // }
    // }
    public Message save(Message message) {
        if (message.getIdMessage() == null) {
            return repositoryMessage.save(message);
        } else {
            Optional<Message> message1 = repositoryMessage.getMessage(message.getIdMessage());
            if (message1.isEmpty()) {
                return repositoryMessage.save(message);
            } else {
                return message;
            }
        }
    }
}
