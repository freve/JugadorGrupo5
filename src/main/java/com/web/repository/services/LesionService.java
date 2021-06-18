package com.web.repository.services;

import java.util.List;
import com.web.entities.Lesion;

public interface LesionService {

	public List<Lesion> findAll();
	public Lesion save(Lesion lesion);
	public Lesion findById(int idLesion);
	public void delete(int idLesion);
	public List<Lesion>listarPorJugador(int idJugador);
}
