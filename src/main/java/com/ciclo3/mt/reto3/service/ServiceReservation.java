package com.ciclo3.mt.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.mt.reto3.model.Reservation;
import com.ciclo3.mt.reto3.repository.RepositoryReservation;

@Service
public class ServiceReservation {

    @Autowired
    private RepositoryReservation repositoryReservation;

    public List<Reservation> getAll() {
        return repositoryReservation.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return repositoryReservation.getReservation(id);
    }

    // public Reservation save(Reservation reservation) {
    // if (reservation.getIdReservation() == null) {
    // return repositoryReservation.save(reservation);
    // } else {
    // Optional<Reservation> reservation_1 =
    // repositoryReservation.getReservation(reservation.getIdReservation());
    // if (reservation_1.isPresent()) {
    // return reservation;
    // } else {
    // return repositoryReservation.save(reservation);
    // }

    // }
    // }
    public Reservation save(Reservation reservation) {
        if (reservation.getIdReservation() == null) {
            return repositoryReservation.save(reservation);
        } else {
            Optional<Reservation> reservation1 = repositoryReservation.getReservation(reservation.getIdReservation());
            if (reservation1.isEmpty()) {
                return repositoryReservation.save(reservation);
            } else {
                return reservation;
            }
        }
    }
}
