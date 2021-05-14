package com.web.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the equipo database table.
 * 
 */
@Entity
@NamedQuery(name="Equipo.findAll", query="SELECT e FROM Equipo e")
public class Equipo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String ciudad;

	private String direccion;

	@Lob
	private byte[] escudo;

	@Column(name="id_club")
	private int idClub;

	@Column(name="id_cuerpo_tecnico")
	private int idCuerpoTecnico;

	private String nombre;

	private int telefono;

	//bi-directional many-to-one association to Categoria
	@ManyToOne
	@JoinColumn(name="id_categoria")
	private Categoria categoria;

	public Equipo() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCiudad() {
		return this.ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getDireccion() {
		return this.direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public byte[] getEscudo() {
		return this.escudo;
	}

	public void setEscudo(byte[] escudo) {
		this.escudo = escudo;
	}

	public int getIdClub() {
		return this.idClub;
	}

	public void setIdClub(int idClub) {
		this.idClub = idClub;
	}

	public int getIdCuerpoTecnico() {
		return this.idCuerpoTecnico;
	}

	public void setIdCuerpoTecnico(int idCuerpoTecnico) {
		this.idCuerpoTecnico = idCuerpoTecnico;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getTelefono() {
		return this.telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public Categoria getCategoria() {
		return this.categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

}