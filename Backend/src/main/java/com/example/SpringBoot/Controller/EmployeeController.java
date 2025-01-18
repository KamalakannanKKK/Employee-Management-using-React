package com.example.SpringBoot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBoot.Entity.Employee;
import com.example.SpringBoot.Service.EmployeeService;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/getAllEmployee")
	public ResponseEntity<List<Employee>> getAllEmployee(){
		List<Employee> emp=this.employeeService.getAllEmployee();
		return  new ResponseEntity<>(emp, HttpStatus.OK);
	}
	
	@GetMapping("/getEmployeeById/{id}")
	private ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
		Employee emp=this.employeeService.getEmployeeById(id);
		return new ResponseEntity<Employee>(emp,HttpStatus.OK);
	}
	
	@PostMapping("/addEmployee")
	private ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		System.out.println(employee.getName());
		Employee emp=this.employeeService.addEmployee(employee);
		return new ResponseEntity<Employee>(emp,HttpStatus.CREATED);
	}
	
	@PutMapping("/updateEmployee")
	private ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee,@RequestParam long id){
		Employee emp=this.employeeService.updateEmployee(id, employee);
		return new ResponseEntity<Employee>(emp,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable long id) {
		this.employeeService.deleteEmployee(id);
		return "Employee with id: "+id+" is Successfully Deleted";
	}
	
	@GetMapping("/getEmployeeByName/{name}")
	public ResponseEntity<List<Employee>> getEmployeeeByName(@PathVariable String name){
		List<Employee> emp=this.employeeService.getemployeebyName(name);
		return new ResponseEntity<List<Employee>>(emp,HttpStatus.OK);
	}
}
