package com.web.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Categoria implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Lob
	private String descripcion;

	private String nombre;

	//bi-directional many-to-one association to Equipo
	@JsonIgnore
	@OneToMany(mappedBy="categoria")
	private List<Equipo> equipos;

	public Categoria() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Equipo> getEquipos() {
		return this.equipos;
	}

	public void setEquipos(List<Equipo> equipos) {
		this.equipos = equipos;
	}

	public Equipo addEquipo(Equipo equipo) {
		getEquipos().add(equipo);
		equipo.setCategoria(this);

		return equipo;
	}

	public Equipo removeEquipo(Equipo equipo) {
		getEquipos().remove(equipo);
		equipo.setCategoria(null);

		return equipo;
	}

}
