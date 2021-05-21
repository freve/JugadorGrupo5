package com.web.repository.services;

import java.util.List;

import com.web.entities.Jugador;

public interface JugadorService {
	
	public List<Jugador> findAll();
	public Jugador save(Jugador jugador);
	public Jugador findById(int id);
	public String delete(int id);

}
