/**
 * Represents a user in the application.
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * Represents a data item in the application.
 */
export interface DataItem {
  id: string; // Unique identifier for the data item
  name: string; // Name of the data item
  description: string; // Description of the data item
}
