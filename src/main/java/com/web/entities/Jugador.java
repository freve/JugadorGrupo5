package com.web.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the jugador database table.
 * 
 */
@Entity
@NamedQuery(name="Jugador.findAll", query="SELECT j FROM Jugador j")
public class Jugador implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String apellido;

	private String correo;

	private String direccion;

	private int estado;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_nacimiento")
	private Date fechaNacimiento;

	@Column(name="id_equipo")
	private int idEquipo;

	private String nombre;

	private String telefono;

	//bi-directional many-to-one association to FichaJugador
	@OneToMany(mappedBy="jugador")
	private List<FichaJugador> fichaJugadors;

	public Jugador() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getApellido() {
		return this.apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCorreo() {
		return this.correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getDireccion() {
		return this.direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public int getEstado() {
		return this.estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public Date getFechaNacimiento() {
		return this.fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public int getIdEquipo() {
		return this.idEquipo;
	}

	public void setIdEquipo(int idEquipo) {
		this.idEquipo = idEquipo;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return this.telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public List<FichaJugador> getFichaJugadors() {
		return this.fichaJugadors;
	}

	public void setFichaJugadors(List<FichaJugador> fichaJugadors) {
		this.fichaJugadors = fichaJugadors;
	}

	public FichaJugador addFichaJugador(FichaJugador fichaJugador) {
		getFichaJugadors().add(fichaJugador);
		fichaJugador.setJugador(this);

		return fichaJugador;
	}

	public FichaJugador removeFichaJugador(FichaJugador fichaJugador) {
		getFichaJugadors().remove(fichaJugador);
		fichaJugador.setJugador(null);

		return fichaJugador;
	}

}