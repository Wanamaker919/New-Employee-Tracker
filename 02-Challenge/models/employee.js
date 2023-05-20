const pool = require('../db/connection');

class Employee {
  getAllEmployees() {
    return pool.promise().query('SELECT * FROM employee');
  }

  createEmployee(firstName, lastName, roleId, managerId) {
    return pool.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
  }
}

module.exports = new Employee();
