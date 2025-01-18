package com.example.SpringBoot.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBoot.Entity.Employee;
import com.example.SpringBoot.Exception.ResourceNotFoundException;
import com.example.SpringBoot.Repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//GetAll
	public List<Employee> getAllEmployee(){
		return this.employeeRepository.findAll();
	}
	
	//GetById
	public Employee getEmployeeById(long id) {
		return this.employeeRepository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Employeed with id : "+id+" not Found"));
	}
	
	//addEmployee
	public Employee addEmployee(Employee employee) {
		return this.employeeRepository.save(employee);
	}
	
	//updateEmployee
	public Employee updateEmployee(long id, Employee employee) {
		Employee existingEmp=this.employeeRepository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Employeed with id : "+id+" not Found")
				);
		
		existingEmp.setName(employee.getName());
		existingEmp.setJob(employee.getJob());
		existingEmp.setAge(employee.getAge());
		
		return this.employeeRepository.save(existingEmp);
	}
	
	//DeleteEmployee
	public void deleteEmployee(long id) {
		this.employeeRepository.deleteById(id);
	}
	
	//getEmployeeByName
	public List<Employee> getemployeebyName(String name){
		return this.employeeRepository.findByEmployeeName(name);
	}
}
