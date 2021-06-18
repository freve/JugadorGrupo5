package com.web.repository.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.web.entities.Lesion;

public interface ILesionDao extends CrudRepository<Lesion, Integer> {
	
	@Query("select l from Lesion l where l.jugador.id = ?1")
	public List<Lesion>listarPorJugador(int idJugador);

}
