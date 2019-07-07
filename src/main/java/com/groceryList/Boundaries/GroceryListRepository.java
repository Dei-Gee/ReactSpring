/**
 * 
 */
package com.groceryList.Boundaries;

import org.springframework.data.jpa.repository.JpaRepository;
import com.groceryList.Entities.*;

/**
 * @author lowbl
 *
 */
public interface GroceryListRepository extends JpaRepository<Item, Integer> {

}
