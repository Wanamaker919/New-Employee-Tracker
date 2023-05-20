const pool = require('../db/connection');

class Role {
  getAllRoles() {
    return pool.promise().query('SELECT * FROM role');
  }

  createRole(title, salary, departmentId) {
    return pool.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  }
}

module.exports = new Role();
