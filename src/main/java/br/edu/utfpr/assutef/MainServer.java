package br.edu.utfpr.assutef;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class MainServer extends SpringBootServletInitializer{
	
	public static void main(String[] args) {
		SpringApplication.run(MainServer.class, args);
	}
	
}