package com.groceryList.GroceryList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.groceryList.Controllers", "com.groceryList.Services"})
@EntityScan("com.groceryList.Entities")
@EnableJpaRepositories("com.groceryList.Boundaries")
public class GroceryListApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroceryListApplication.class, args);
	}

}
