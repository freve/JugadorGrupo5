package com.web.repository.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.web.entities.Jugador;

public interface IJugadorDao extends CrudRepository<Jugador, Integer> {

	@Query("select j from Jugador j where j.idEquipo = ?1")
	public List<Jugador> listarPorEquipo(int idEquipo);
}
