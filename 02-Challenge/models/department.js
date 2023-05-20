const pool = require('../db/connection');

class Department {
  getAllDepartments() {
    return pool.promise().query('SELECT * FROM department');
  }

  createDepartment(name) {
    return pool.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
  }
}

module.exports = new Department();
