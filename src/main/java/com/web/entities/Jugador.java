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
	
	@Column(name="tipo_sangre")
	private String tipoSangre;

	private String hemoglobina;

	private String consumo;

	@Column(name="talla_camisa")
	private String tallaCamisa;
	
	@Column(name="talla_pantaloneta")
	private String tallaPantaloneta;
	
	@Column(name="talla_zapato")
	private String tallaZapato;
	
	//bi-directional many-to-one association to Lesion
	@OneToMany(mappedBy="jugador")
	private List<Lesion> lesions;
	
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

	public String getTipoSangre() {
		return tipoSangre;
	}

	public void setTipoSangre(String tipoSangre) {
		this.tipoSangre = tipoSangre;
	}

	public String getHemoglobina() {
		return hemoglobina;
	}

	public void setHemoglobina(String hemoglobina) {
		this.hemoglobina = hemoglobina;
	}

	public String getConsumo() {
		return consumo;
	}

	public void setConsumo(String consumo) {
		this.consumo = consumo;
	}

	public String getTallaCamisa() {
		return tallaCamisa;
	}

	public void setTallaCamisa(String tallaCamisa) {
		this.tallaCamisa = tallaCamisa;
	}

	public String getTallaPantaloneta() {
		return tallaPantaloneta;
	}

	public void setTallaPantaloneta(String tallaPantaloneta) {
		this.tallaPantaloneta = tallaPantaloneta;
	}

	public String getTallaZapato() {
		return tallaZapato;
	}

	public void setTallaZapato(String tallaZapato) {
		this.tallaZapato = tallaZapato;
	}

	public List<Lesion> getLesions() {
		return lesions;
	}

	public void setLesions(List<Lesion> lesions) {
		this.lesions = lesions;
	}

}