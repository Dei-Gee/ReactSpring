/**
 * 
 */
package com.groceryList.Boundaries;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groceryList.Entities.*;

/**
 * @author lowbl
 *
 */

@Repository
public interface GroceryListRepository extends CrudRepository<Item, Integer> {
	
}
