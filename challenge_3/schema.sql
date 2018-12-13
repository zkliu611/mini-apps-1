CREATE DATABASE IF NOT EXISTS multi_step_checkout;

USE multi_step_checkout;

CREATE TABLE checkout (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(100),
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zipCode INT NOT NULL,
  creditCard INT NOT NULL,
  expiration INT NOT NULL,
  CVV INT NOT NULL,
  billingZip INT NOT NULL
);
