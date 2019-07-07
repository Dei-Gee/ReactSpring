/**
 * 
 */
package com.groceryList.Entities;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;

/**
 * @author lowbl
 *
 */
@Entity
@Table(name="items")
public class Item {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int id;
	 	
	 	@Column(name="name")
	    private String _name;
	    
	 	@Column(name="quantity")
	 	private int _quantity;

	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getName() {
	        return _name;
	    }

	    public void setName(String name) {
	        this._name = name;
	    }

	    public int getQuantity() {
	        return _quantity;
	    }

	    public void setQuantity(int quantity) {
	        this._quantity = quantity;
	    }

}
