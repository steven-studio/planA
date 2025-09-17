-- Create the database
CREATE DATABASE IF NOT EXISTS loan_risk_db;
USE loan_risk_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create loan_applications table
CREATE TABLE IF NOT EXISTS loan_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  loan_amount DECIMAL(15, 2) NOT NULL,
  loan_purpose VARCHAR(100) NOT NULL,
  loan_term INT NOT NULL, -- in months
  interest_rate DECIMAL(5, 2) NOT NULL,
  employment_status VARCHAR(50) NOT NULL,
  annual_income DECIMAL(15, 2) NOT NULL,
  credit_score INT,
  application_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  risk_score DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create loan_documents table
CREATE TABLE IF NOT EXISTS loan_documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  loan_application_id INT NOT NULL,
  document_type VARCHAR(50) NOT NULL,
  document_path VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (loan_application_id) REFERENCES loan_applications(id)
);

-- Create payment_history table
CREATE TABLE IF NOT EXISTS payment_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  loan_application_id INT NOT NULL,
  payment_amount DECIMAL(15, 2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_status ENUM('pending', 'completed', 'late', 'missed') NOT NULL,
  FOREIGN KEY (loan_application_id) REFERENCES loan_applications(id)
);

-- Insert sample users
INSERT INTO users (username, password, email, full_name)
VALUES 
('johndoe', 'hashed_password_here', 'john@example.com', 'John Doe'),
('janedoe', 'hashed_password_here', 'jane@example.com', 'Jane Doe');

-- Insert sample loan applications
INSERT INTO loan_applications (user_id, loan_amount, loan_purpose, loan_term, interest_rate, employment_status, annual_income, credit_score, application_status)
VALUES 
(1, 10000.00, 'Home Renovation', 24, 5.5, 'Full-time', 75000.00, 720, 'approved'),
(2, 5000.00, 'Education', 12, 4.5, 'Part-time', 35000.00, 680, 'pending'); 