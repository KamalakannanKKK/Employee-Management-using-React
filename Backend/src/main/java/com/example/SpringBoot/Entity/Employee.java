package com.example.SpringBoot.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee Detail")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long employeeId;
	
	@Column(name="Employee Name")
	private String name;
	
	@Column(name="Employee Job")
	private String job;
	
	@Column(name="Age")
	private String age;

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public Employee(long employeeId, String name, String job, String age) {
		super();
		this.employeeId = employeeId;
		this.name = name;
		this.job = job;
		this.age = age;
	}

	public Employee() {
		super();
	}
	
	
	
}
